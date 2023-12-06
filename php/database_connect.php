<?php
$sever = "localhost";
$username = "root";
$password = "root";
$database = "php";
$mysqli = new mysqli($sever, $username, $password, $database);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
} else {
    echo "Connected to MySQL" . "<br>";
}
?>
<!--  -->