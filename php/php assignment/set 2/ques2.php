<!-- Write a PHP program to compute the compound interest. -->
<?php
$principle = 10000;
$rate = 10;
$time = 5;
function compound_interest($principle, $rate, $time)
{
    return $principle * (pow((1 + $rate / 100), $time));
}

echo "Principle amount: $principle<br>";
echo "Rate of interest: $rate<br>";
echo "Time period: $time<br>";
echo "Compound interest: " . compound_interest($principle, $rate, $time) . "<br>";
?>
<!--  -->
