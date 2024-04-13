const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'restaurant_review'
});

// Endpoint to handle review submissions
app.post('/submit-review', (req, res) => {
  const { restaurantName, reviewTitle, reviewContent, reviewAuthor, reviewRating } = req.body;

  // Insert review into database
  const sql = `INSERT INTO Reviews (restaurant_name, review_title, review_content, author_name, rating) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [restaurantName, reviewTitle, reviewContent, reviewAuthor, reviewRating], (error, results) => {
    if (error) {
      console.error('Error inserting review:', error);
      res.status(500).json({ error: 'Error inserting review' });
    } else {
      console.log('Review inserted successfully');
      res.status(200).json({ message: 'Review submitted successfully' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
