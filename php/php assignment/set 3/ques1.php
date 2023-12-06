<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Database</title>
</head>
<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: .2rem;
    }

    table {
        border: 1px solid black;
        table-layout: auto;
        width: 50%;
        border-collapse: collapse;
    }

    table td,
    table th {
        text-align: center;
        border: 1px solid black;
    }

</style>
<body>

<?php
include 'D:\OneDrive - jackthefire\BBDU-WORK-FILES\php\database_connect.php';
if ($mysqli->query("CREATE DATABASE IF NOT EXISTS `Details_db`") == 1) {
    echo "Database created successfully" . "<br>";
}

$mysqli->select_db("Details_db");

$emp_table = "CREATE TABLE IF NOT EXISTS `Employee` (
    `emp_id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `emp_name` VARCHAR(30) NOT NULL,
    `emp_dept` VARCHAR(30) NOT NULL,
    `experience` INT(6) NOT NULL,
    `salary` INT(6) NOT NULL
    )";

$std_table = "CREATE TABLE IF NOT EXISTS `Student` (
    `std_rollNo` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `std_name` VARCHAR(30) NOT NULL,
    `batch` VARCHAR(30) NOT NULL,
    `year` INT(6) NOT NULL,
    `semester` INT(6) NOT NULL
    )";

if ($mysqli->query($emp_table) == 1) {
    echo "Employee Table created successfully" . "<br>";
}

if ($mysqli->query($std_table) == 1) {
    echo "Student Table created successfully" . "<br>";
}

for ($i = 0; $i < 20; $i++) {
    $emp_name = "emp" . $i;
    $emp_dept = "dept" . $i;
    $experience = $i;
    $salary = $i * 10000;
    $emp_query = "INSERT INTO `Employee` (`emp_name`, `emp_dept`, `experience`, `salary`) VALUES ('$emp_name', '$emp_dept', '$experience', '$salary')";
    // if ($mysqli->query($emp_query) == 1) {
    //     echo "Employee entry inserted successfully" . "<br>";
    // }
}

for ($i = 0; $i < 20; $i++) {
    $std_name = "std" . $i;
    $batch = "batch" . $i;
    $year = $i;
    $semester = $i;
    $std_query = "INSERT INTO `Student` (`std_name`, `batch`, `year`, `semester`) VALUES ('$std_name', '$batch', '$year', '$semester')";
    // if ($mysqli->query($std_query) == 1) {
    //     echo "Student entry inserted successfully" . "<br>";
    // }
}

$show_emp = "SELECT * FROM `Employee`";
$show_std = "SELECT * FROM `Student`";

$emp_result = $mysqli->query($show_emp);
$std_result = $mysqli->query($show_std);

$emp_rows = $emp_result->fetch_all(MYSQLI_ASSOC);
$std_rows = $std_result->fetch_all(MYSQLI_ASSOC);
echo "<div class='container'>";
echo "<table>";
echo "<tr><th>emp_id</th><th>emp_name</th><th>emp_dept</th><th>experience</th><th>salary</th></tr>";
foreach ($emp_rows as $row) {
    echo "<tr>";
    echo "<td>" . $row['emp_id'] . "</td>";
    echo "<td>" . $row['emp_name'] . "</td>";
    echo "<td>" . $row['emp_dept'] . "</td>";
    echo "<td>" . $row['experience'] . "</td>";
    echo "<td>" . $row['salary'] . "</td>";
    echo "</tr>";
}
echo "</table>";
echo "";

echo "<table>";
echo "<tr><th>std_rollNo</th><th>std_name</th><th>batch</th><th>year</th><th>semester</th></tr>";
foreach ($std_rows as $row) {
    echo "<tr>";
    echo "<td>" . $row['std_rollNo'] . "</td>";
    echo "<td>" . $row['std_name'] . "</td>";
    echo "<td>" . $row['batch'] . "</td>";
    echo "<td>" . $row['year'] . "</td>";
    echo "<td>" . $row['semester'] . "</td>";
    echo "</tr>";
}
echo "</table>";
echo "</div>";
?>
<!--  -->
</body>
</html>