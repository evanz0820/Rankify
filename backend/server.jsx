const express = require("express");
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


app.listen(8081, ()=> {
    console.log("listening");
}

)
