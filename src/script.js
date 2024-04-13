document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  // Function to render a review
  function renderReview(title, content, author, rating) {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    const authorElement = document.createElement('p');
    authorElement.textContent = `By: ${author}`;

    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Rating: ${rating} stars`;

    reviewDiv.appendChild(titleElement);
    reviewDiv.appendChild(contentElement);
    reviewDiv.appendChild(authorElement);
    reviewDiv.appendChild(ratingElement);

    reviewsContainer.appendChild(reviewDiv);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const reviewTitle = document.getElementById('reviewTitle').value;
    const reviewContent = document.getElementById('reviewContent').value;
    const reviewAuthor = document.getElementById('reviewAuthor').value;
    const reviewRating = document.getElementById('reviewRating').value;

    renderReview(reviewTitle, reviewContent, reviewAuthor, reviewRating);

    // Clear form fields after submission
    reviewForm.reset();
  }

  // Event listener for form submission
  reviewForm.addEventListener('submit', handleSubmit);
});
