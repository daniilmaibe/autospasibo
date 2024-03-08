// Function to add a review
function addReview(event) {
    event.preventDefault();
    const carNumber = document.getElementById("carNumber").value;
    const rating = parseInt(document.getElementById("rating").value);
    const reviewText = document.getElementById("reviewText").value;

    // Send review data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_review.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("Review added successfully.");
                reviews.push({ carNumber, rating, reviewText });
                showReviews();
            } else {
                alert("Failed to add review.");
            }
        }
    };
    xhr.send(`carNumber=${carNumber}&rating=${rating}&reviewText=${reviewText}`);
}

// Function to get reviews from server
function getReviews() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_reviews.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            reviews = JSON.parse(xhr.responseText);
            showReviews();
        }
    };
    xhr.send();
}

// Function to calculate average rating
function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / reviews.length;
}

// Function to search reviews by car number
function searchReviews() {
    const searchCarNumber = document.getElementById("searchCarNumber").value;
    const filteredReviews = reviews.filter(review => review.car_number === searchCarNumber);
    if (filteredReviews.length > 0) {
        const averageRating = calculateAverageRating(filteredReviews);
        alert(`Average rating for car ${searchCarNumber}: ${averageRating}`);
    } else {
        alert(`No reviews found for car ${searchCarNumber}`);
    }
}

document.getElementById("searchButton").addEventListener("click", searchReviews);

// Function to show reviews
function showReviews() {
    const reviewsDiv = document.getElementById("reviews");
    reviewsDiv.innerHTML = "";
    for (let review of reviews) {
        reviewsDiv.innerHTML += `<p>Car Number: ${review.car_number}, Rating: ${review.rating}, Review: ${review.review_text}</p>`;
    }
}

document.getElementById("reviewForm").addEventListener("submit", addReview);

// Load reviews when the page loads
window.onload = function () {
    getReviews();
};
