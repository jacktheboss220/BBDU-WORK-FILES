<?php
$mysqli = new mysqli("localhost", "root", "root", "php");

// Check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
} else {
    $result = $mysqli->query("SELECT * FROM std");
}
