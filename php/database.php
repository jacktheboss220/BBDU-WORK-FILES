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
    $result_table = $mysqli->query("create table `php`.`std`(
        name varchar(50),
        age int not null
        );");
    if ($result_table) {
        echo "Table created successfully" . "<br>";

        $insert_table = $mysqli->query("insert into `std`values
        ('Mahesh',24),
        ('Shreeya',22),
        ('Kajal',22),
        ('Zanib',21);"
        );
        if ($insert_table) {
            echo "Data inserted successfully" . "<br>";
            $data_fetch = $mysqli->query("select * from `std`;");
            if ($data_fetch) {
                echo "Data fetched successfully";
                while ($row = $data_fetch->fetch_assoc()) {
                    echo "<br>";
                    echo "Name: " . $row['name'] . " Age: " . $row['age'];
                }
            } else {
                echo "Data not fetched" . "<br>";
            }
        } else {
            echo "Data not inserted" . "<br>";
        }
    } else {
        echo "Table not created" . "<br>";
    }
}
