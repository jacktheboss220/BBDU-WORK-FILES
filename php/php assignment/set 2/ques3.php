<?php
echo "Leap years between 1900 and 2000 are: <br>";
for ($i = 1900; $i <= 2000; $i++) {
    if ($i % 4 == 0) {
        echo "$i, ";
    }
}
?>
<!--  -->
