<?php
$name = "Mahesh Kumar is a programmer";

echo "str_len: " . strlen($name) . "<br>";
echo "str_word_count: " . str_word_count($name) . "<br>";
echo "strrev: " . strrev($name) . "<br>";
echo "is pos: " . strpos($name, "is") . "<br>";
echo "is to res : " . str_replace("is", "", $name) . "<br>";
echo "str_repeat: " . str_repeat($name, 2) . "<br>";
echo "rtrim: " . rtrim($name) . "<br>";
?>
<!--  -->
