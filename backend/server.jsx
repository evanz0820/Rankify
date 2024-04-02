const express = require("express");
require('dotenv').config(); // Load environment variables from .env file

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

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "signup"
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
    const sql = "INSERT INTO login (`name`, `email`,`password`) VALUES (?)";
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
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql,[req.body.email, req.body.password], (err, data) => {
        if(err){
            // return res.json("Error");
            return res.json({Message: "Error"});
        }
        if(data.length > 0 ){
            req.session.username = data[0].name;
            req.session.userID = data[0].id; //Added to to save the user's session ID
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

// app.get('/place-details/:placeID', async (req, res) => {
//     const { placeID } = req.params;
//     try {
//         const response = await fetch(
//             `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=`
//         );
//         if (response.ok) {
//             const data = await response.json();
//             res.json(data.result);
//         } else {
//             console.error("Failed to fetch place details");
//             res.status(500).json({ error: "Failed to fetch place details" });
//         }
//     } catch (error) {
//         console.error("Error fetching place details:", error);
//         res.status(500).json({ error: "Error fetching place details" });
//     }
// });

app.get('/place-details/:placeID', async (req, res) => {
    const { placeID } = req.params;
    try {
        const placeResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=AIzaSyDtZmb0MNgfPKg0GTMZ8l3ErR4AWhR9zE0`
        );
        if (placeResponse.ok) {
            const placeData = await placeResponse.json();
            const reviews = await getReviewsFromDatabase(placeID); // Fetch reviews from the database
            res.json({ placeDetails: placeData.result, reviews: reviews });
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


// Handle review submission
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


// getting from reviews table
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

app.listen(8081, ()=> {
    console.log("listening");
}

)
