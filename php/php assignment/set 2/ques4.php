<!-- Write a PHP program to add two matrices of the same size. -->
<?php
$arr1 = array(
    array(1, 2, 3),
    array(4, 5, 6),
);
$arr2 = array(
    array(7, 8, 9),
    array(10, 11, 12),
);
$arr3 = array();

for ($i = 0; $i < 2; $i++) {
    for ($j = 0; $j < 3; $j++) {
        $arr3[$i][$j] = $arr1[$i][$j] + $arr2[$i][$j];
    }
}
echo "The first matrix is: <br>";
for ($i = 0; $i < 2; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $arr1[$i][$j] . " ";
    }
    echo "<br>";
}
echo "<br><br>The second matrix is: <br>";
for ($i = 0; $i < 2; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $arr2[$i][$j] . " ";
    }
    echo "<br>";
}

echo "<br><br>The sum of the two matrices is: <br>";
for ($i = 0; $i < 2; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $arr3[$i][$j] . " ";
    }
    echo "<br>";
}

?>
<!--  -->
