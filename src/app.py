from flask import Flask, render_template

app = Flask(__name__)

# Define a route for the root URL ('/')
@app.route('/')
def index():
    return 'Hello, World!'

# Define a route for the review page
@app.route('/restaurant/<int:restaurant_id>/reviews')
def restaurant_reviews(restaurant_id):
    # Your logic to retrieve restaurant reviews goes here
    # For now, let's assume you have a function to get reviews
    reviews = get_reviews_for_restaurant(restaurant_id)
    restaurant_name = "Restaurant Name"  # Placeholder for restaurant name
    return render_template('reviews.html', restaurant_name=restaurant_name, reviews=reviews)

# Function to retrieve restaurant reviews (just a placeholder)
def get_reviews_for_restaurant(restaurant_id):
    # Dummy data for demonstration purposes
    return [
        {'rating': 5, 'comment': 'Excellent food!'},
        {'rating': 4, 'comment': 'Good service.'},
        {'rating': 3, 'comment': 'Average experience.'}
    ]

if __name__ == '__main__':
    app.run(debug=True)
