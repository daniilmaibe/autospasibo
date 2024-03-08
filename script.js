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
                alert("Отзыв успешно добавлен.");
                reviews.push({ carNumber, rating, reviewText });
                showReviews();
            } else {
                alert("Отзыв не удалось добавить.");
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

// Function to show last 10 reviews
function showLast10Reviews() {
    // Send AJAX request to get last 10 reviews from server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_last_10_reviews.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.length > 0) {
                const last10ReviewsDiv = document.getElementById("last10Reviews");
                last10ReviewsDiv.innerHTML = "<h3>Последние 10 отзывов</h3>";
                for (let review of response) {
                    last10ReviewsDiv.innerHTML += `<p>Номер авто: ${review.car_number}, Оценка: ${review.rating}, Комментарий: ${review.review_text}</p>`;
                }
            }
        }
    };
    xhr.send();
}




// Function to search reviews by car number
function searchReviews() {
    const searchCarNumber = document.getElementById("searchCarNumber").value;

    // Send AJAX request to get reviews and average rating from server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `get_reviews.php?searchCarNumber=${searchCarNumber}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.length > 0) {
                showSearchResults(response);
            } else {
                alert(`Не найдено автомобилей с номером ${searchCarNumber}`);
            }
        }
    };
    xhr.send();
}

// Function to show search results
function showSearchResults(reviews) {
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = `<h3>Результаты поиска</h3>`;
    for (let review of reviews) {
        searchResultsDiv.innerHTML += `<p>Номер авто: ${review.car_number}, Оценка: ${review.rating}, Комментарий: ${review.review_text}</p>`;
    }
    searchResultsDiv.innerHTML += `<p>Средняя оценка: ${parseFloat(review.average_rating).toFixed(2)}</p>`;
}

document.getElementById("searchButton").addEventListener("click", searchReviews);

// Function to calculate average rating
function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / reviews.length;
}





// Function to show reviews
function showReviews() {
    const reviewsDiv = document.getElementById("reviews");
    reviewsDiv.innerHTML = "";
    for (let review of reviews) {
        reviewsDiv.innerHTML += `<p>Номер авто: ${review.car_number}, Оценка: ${review.rating}, Комментарий: ${review.review_text}</p>`;
    }
}

document.getElementById("reviewForm").addEventListener("submit", addReview);




// Load reviews when the page loads
window.onload = function () {
    getReviews();
    showLast10Reviews();
};
