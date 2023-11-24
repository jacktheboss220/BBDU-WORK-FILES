<?php
function add($a, $b)
{
    return $a + $b;
}
function subtract($a, $b)
{
    return $a - $b;
}
function multiply($a, $b)
{
    return $a * $b;
}
function divide($a, $b)
{
    return $a / $b;
}
function modulus($a, $b)
{
    return $a % $b;
}
function power($a, $b)
{
    return $a ** $b;
}
echo add(1, 2) . "\n" . subtract(4, 2) . "\n" . multiply(2, 2) . "\n" . divide(4, 2) . "\n" . modulus(4, 2) . "\n" . power(2, 2) . "\n";
