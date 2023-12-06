<?php
$sever = "localhost";
$username = "root";
$password = "root";
$database = "";
$mysqli = new mysqli($sever, $username, $password);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
} else {
    echo "Connected successfully";
}
?>
<!--  -->
