<?php
// Connect to database
$servername = "localhost";
$username = "root"; // Enter your MySQL username
$password = ""; // Enter your MySQL password
$dbname = "autospasibo"; // Enter your database name


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get car number from GET request
$searchCarNumber = $_GET["searchCarNumber"];

// Fetch reviews and average rating from database
//$sql = "SELECT * FROM reviews WHERE car_number='$searchCarNumber' ORDER BY id DESC LIMIT 10";
//$sql = "SELECT *, AVG(rating) AS average_rating FROM reviews WHERE car_number='$searchCarNumber' ORDER BY id DESC LIMIT 10";
$sql = "SELECT car_number, rating, review_text, (SELECT AVG(r2.rating) FROM reviews r2 WHERE r2.car_number = '$searchCarNumber') AS average_rating FROM reviews WHERE car_number = '$searchCarNumber' ORDER BY id DESC LIMIT 10";
$result = $conn->query($sql);
$reviews = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
}

echo json_encode($reviews);

$conn->close();
?>