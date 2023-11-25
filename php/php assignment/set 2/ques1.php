<!-- create a simple calculator using functions call in php -->
<?php
function add($a, $b)
{
    return $a + $b;
}
function sub($a, $b)
{
    return $a - $b;
}
function mul($a, $b)
{
    return $a * $b;
}
function div($a, $b)
{
    return $a / $b;
}
function mod($a, $b)
{
    return $a % $b;
}
function calc($a, $b, $op)
{
    switch ($op) {
        case '+':
            return add($a, $b);
        case '-':
            return sub($a, $b);
        case '*':
            return mul($a, $b);
        case '/':
            return div($a, $b);
        case '%':
            return mod($a, $b);
        default:
            echo "Invalid Operator";
    }
}
echo "Addition of 10 and 20 is " . calc(10, 20, '+') . "<br>";
echo "Subtraction of 10 and 20 is " . calc(10, 20, '-') . "<br>";
echo "Multiplication of 10 and 20 is " . calc(10, 20, '*') . "<br>";
echo "Division of 10 and 20 is " . calc(10, 20, '/') . "<br>";
echo "Modulus of 10 and 20 is " . calc(10, 20, '%') . "<br>";
?>
<!--  -->