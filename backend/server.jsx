const dotenv = require("dotenv");
dotenv.config(); // Load the .env file
const express = require("express");

const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;
// Check if it's properly loaded
// Use async function to dynamically import node-fetch
(async () => {
    try {
        const fetch = await import("node-fetch");
        // Rest of your server setup code using fetch...
    } catch (error) {
        console.error("Error importing node-fetch:", error);
    }
})();   



const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
    // Make sure to use http://localhost:5173 and not  http://localhost:5173/
    origin: ["http://localhost:5173"],
    method: ["POST", "GET"],
    credentials: true

}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: 'secret', // a secret key used to encrypt the session cookie
    resave: false,
    saveUninitialized : false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    } // set the session cookie properties
}))

app.get("/get-logged-in-user-id", (req, res) => {
    if (req.session.userID) {
        res.json({ userID: req.session.userID });
    } else {
        res.status(404).json({ error: "User ID not found in session" });
    }
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    datebase: "rankify"
})

app.get('/homelogin', (req,res) => {
    if(req.session.username){
        return res.json({valid: true, username: req.session.username})
    } else{
        return res.json({valid: false})
    }
})

// logout route accessible for frontend to remove cookie session
app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.json({ success: false });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        return res.json({ success: true });
    });
});

app.post("/signup", (req, res) => {
    console.log("Received signup request"); // Add this line
    const sql = "INSERT INTO Users (`name`, `email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
}
)

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM Users WHERE `email` = ? AND `password` = ?";
    db.query(sql,[req.body.email, req.body.password], (err, data) => {
        if(err){
            // return res.json("Error");
            return res.json({Message: "Error"});
        }
        if(data.length > 0 ){
            req.session.username = data[0].name;
            // console.log(data)
            // console.log(req.session.username);
            // return res.json("Success");
            return res.json({Login: true})
        } else{
            // return res.json("Failed")
            return res.json({Login: false});
        }
    })
}
)



// Maps stuff

app.get('/place-details/:placeID', async (req, res) => {
    const { placeID } = req.params;
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${googleMapsAPIKey}`
        );
        if (response.ok) {
            const data = await response.json();
            res.json(data.result);
        } else {
            console.error("Failed to fetch place details");
            res.status(500).json({ error: "Failed to fetch place details" });
        }
    } catch (error) {
        console.error("Error fetching place details:", error);
        res.status(500).json({ error: "Error fetching place details" });
    }
});

// End of google stuff

app.post("/submit-review", (req, res) => {
    const { placeID, reviewContent, rating } = req.body;
    const userID = req.session.userID; // Assuming you store the user's ID in the session

    // Insert the review into the database
    const sql = "INSERT INTO reviews (place_id, review_content, rating, review_date, id) VALUES (?, ?, ?, NOW(), ?)";
    const values = [placeID, reviewContent, rating, userID];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error submitting review:", err);
            res.status(500).json({ error: "Failed to submit review" });
        } else {
            console.log("Review submitted successfully");
            res.json({ success: true });
        }
    });
});

async function getReviewsFromDatabase(placeID) {
    // Query your database for reviews associated with the given place_id
    const sql = "SELECT r.*, l.name FROM reviews r JOIN login l ON r.id = l.id WHERE r.place_id = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [placeID], (err, reviews) => {
            if (err) {
                console.error("Error fetching reviews:", err);
                reject(err);
            } else {
                resolve(reviews);
            }
        });
    });
}
// End of review stuff

app.post("/submit-comment", (req, res) => {
    const { placeID, commentContent, reviewTime } = req.body;
    // console.log(reviewTime);
    const userID = req.session.userID;

    // Check if reviewTime is provided and convert it to a valid datetime format
    let formattedTime = null;
    if (reviewTime){
        // Check if reviewTime is in ISO format
        if (reviewTime.includes('T')) {
            // Extract the date part from the ISO string
            const datePart = reviewTime.split('T')[0];
            // Combine with the time part if available, or set it to '00:00:00' by default
            formattedTime = datePart + (reviewTime.split('T')[1] ? ' ' + reviewTime.split('T')[1].split('.')[0] : ' 00:00:00');
        } else {
            // Convert UNIX timestamp to milliseconds
            const timestamp = parseInt(reviewTime) * 1000;
            // Create a new Date object using the timestamp
            const date = new Date(timestamp);
            // Format the date as a datetime string
            formattedTime = date.toISOString().slice(0, 19).replace('T', ' ');
        }
    }
    // console.log(formattedTime);
    // Insert the comment along with the review_time into the database
    const sql = "INSERT INTO comments (place_id, comment_content, comment_date, id, review_time) VALUES (?, ?, NOW(), ?, ?)";
    const values = [placeID, commentContent, userID, formattedTime];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error submitting comment:", err);
            res.status(500).json({ error: "Failed to submit comment" });
        } else {
            console.log("Comment submitted successfully");
            res.json({ success: true });
        }
    });
});


app.get('/get-comments/:placeID/:reviewTime', async (req, res) => {
    const { placeID, reviewTime } = req.params;
    try {
        // console.log("Fetching comments for placeID:", placeID, "and reviewTime:", reviewTime); 
        const comments = await getCommentsFromDatabase(placeID, reviewTime);
        
        res.json({ comments });
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Error fetching comments" });
    }
});



async function getCommentsFromDatabase(placeID, reviewTime) {
    // Convert Unix timestamp to datetime format
    let formattedTime = reviewTime;

     // Check if the provided reviewTime is in UNIX timestamp format
     if (!isNaN(reviewTime)) {
        // Convert Unix timestamp to datetime format
        formattedTime = new Date(reviewTime * 1000).toISOString().slice(0, 19).replace('T', ' ');
        // reviewTime = formattedTime;
    }
    // const reviewDateTime = new Date(reviewTime * 1000).toISOString().slice(0, 19).replace('T', ' ');
    // console.log(formattedTime);
    // const sql = "SELECT * FROM comments WHERE place_id = ? AND review_time = ?";
    const sql = `
    SELECT c.*, l.name AS user_name
    FROM comments c
    INNER JOIN login l ON c.id = l.id
    WHERE c.place_id = ? AND c.review_time = ?
    `;


    return new Promise((resolve, reject) => {
        db.query(sql, [placeID, formattedTime], (err, comments) => {
            if (err) {
                console.error("Error fetching comments:", err);
                reject(err);
            } else {
                // console.log("Fetched comments:", comments);
                resolve(comments);
            }
        });
    });
}

app.listen(8081, ()=> {
    console.log("listening");
}

)
