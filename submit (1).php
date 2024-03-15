<?php
$servername = "localhost:3306";
$username = "root";
$password = " ";
$dbname = "userDatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO userInfo (Name, Email, Age, DateOfBirth) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssis", $name, $email, $age, $dob);

// Set parameters from the form
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$dob = $_POST['dob'];

// Execute the statement
if ($stmt->execute()) {
  echo "New record created successfully";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
