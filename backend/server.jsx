const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const GoogleApiKey = process.env.GOOGLE_MAPS_API_KEY;


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
            req.session.userID = data[0].id;
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
        const placeResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${GoogleApiKey}`
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


// Handle review submission
app.post("/submit-review", async (req, res) => {
    const { placeID, reviewContent, rating } = req.body;
    const userID = req.session.userID; // Assuming you store the user's ID in the session

    try {
        // Fetch the location name from the Google Places API using the provided placeID
        const placeDetailsResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${GoogleApiKey}`
        );
        
        if (!placeDetailsResponse.ok) {
            throw new Error("Failed to fetch place details");
        }
        
        const placeDetails = await placeDetailsResponse.json();
        const locationName = placeDetails.result.name;

        // Insert the review into the database
        const sql = "INSERT INTO reviews (place_id, review_content, rating, review_date, id, location_name) VALUES (?, ?, ?, NOW(), ?, ?)";
        const values = [placeID, reviewContent, rating, userID, locationName];
        
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error submitting review:", err);
                res.status(500).json({ error: "Failed to submit review" });
            } else {
                console.log("Review submitted successfully");
                res.json({ success: true });
            }
        });
    } catch (error) {
        console.error("Error fetching place details:", error);
        res.status(500).json({ error: "Failed to fetch place details" });
    }
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



// Grabbing all reviews for signedin user:
app.get("/get-user-reviews", (req, res) => {
    const userID = req.session.userID; // Get the logged-in user's ID from the session

    // Query the database to fetch reviews based on the user's ID
    const sql = "SELECT * FROM reviews WHERE id = ?";
    
    db.query(sql, [userID], (err, reviews) => {
        if (err) {
            console.error("Error fetching user reviews:", err);
            res.status(500).json({ error: "Failed to fetch user reviews" });
        } else {
            res.json({ reviews });
        }
    });
});

// Handle comment submission
app.post("/submit-comment", async (req, res) => {
    const { placeID, commentContent, reviewID } = req.body;
    const userID = req.session.userID;

    try {
        // Insert the comment into the database
        const sql = "INSERT INTO comments (place_id, comment_content, comment_date, review_id, id) VALUES (?, ?, NOW(), ?, ?)";
        const values = [placeID, commentContent, reviewID, userID];
        
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error submitting comment:", err);
                res.status(500).json({ error: "Failed to submit comment" });
            } else {
                console.log("Comment submitted successfully");
                res.json({ success: true });
            }
        });
    } catch (error) {
        console.error("Error submitting comment:", error);
        res.status(500).json({ error: "Failed to submit comment" });
    }
});

// Handle fetching comments for a specific review
app.get("/get-comments/:reviewID", async (req, res) => {
    const { reviewID } = req.params;
    // Query the database to fetch comments based on the reviewID
    const sql = "SELECT * FROM comments WHERE review_id = ?";
    db.query(sql, [reviewID], (err, comments) => {
        if (err) {
            console.error("Error fetching comments:", err);
            res.status(500).json({ error: "Failed to fetch comments" });
        } else {
            res.json({ comments });
        }
    });
});

// Handle DELETE request to delete a review
app.delete("/delete-review/:reviewID", (req, res) => {
    const reviewID = req.params.reviewID;

    // Construct the SQL query to delete the review with the given review ID
    const sql = "DELETE FROM reviews WHERE review_id = ?";
    
    // Execute the query
    db.query(sql, [reviewID], (err, result) => {
        if (err) {
            console.error("Error deleting review:", err);
            res.status(500).json({ error: "Failed to delete review" });
        } else {
            console.log("Review deleted successfully");
            res.json({ success: true });
        }
    });
});

// Add this route definition before the existing route definitions

// Handle GET request to fetch a review by its ID
app.get("/get-review/:reviewID", (req, res) => {
    const reviewID = req.params.reviewID;

    // Construct the SQL query to fetch the review with the given review ID
    const sql = "SELECT * FROM reviews WHERE review_id = ?";
    
    // Execute the query
    db.query(sql, [reviewID], (err, result) => {
        if (err) {
            console.error("Error fetching review:", err);
            res.status(500).json({ error: "Failed to fetch review" });
        } else {
            if (result.length > 0) {
                res.json({ review: result[0] }); // Assuming the result is an array of reviews, send the first review
            } else {
                res.status(404).json({ error: "Review not found" });
            }
        }
    });
});

// Handle PUT request to edit a review by its ID
app.put("/edit-review/:reviewID", (req, res) => {
    const reviewID = req.params.reviewID;
    const { reviewContent, rating } = req.body;

    // Construct the SQL query to update the review with the given review ID
    const sql = "UPDATE reviews SET review_content = ?, rating = ? WHERE review_id = ?";
    
    // Execute the query
    db.query(sql, [reviewContent, rating, reviewID], (err, result) => {
        if (err) {
            console.error("Error editing review:", err);
            res.status(500).json({ error: "Failed to edit review" });
        } else {
            console.log("Review edited successfully");
            res.json({ success: true });
        }
    });
});


app.listen(8081, ()=> {
    console.log("listening");
}

)
