/**
 * 1. Create a function that takes a number as it’s only argument and returns true if it is less than or equal to 0,otherwise return false.
 */

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true

/**
 * 2. Write a JavaScript program to find the area of a triangle.
 */

function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log(triangleArea(10, 5)); // 25

/**
 * 3. Write a JavaScript program to determine whether a given year is a leap year.
 */

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

/**
 * 4. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
 */

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(fahrenheitToCelsius(32)); // 0

/**
 * 5. Write a JavaScript function that returns array elements larger than a number.
 */

function largerThan(arr, num) {
    return arr.filter(element => element > num);
}

console.log(largerThan([1, 2, 3, 4, 5], 3)); // [4, 5]

/**
 * 6.  Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
 */

function sortNumbers(a, b, c) {
    let sorted = [a, b, c].sort((x, y) => x - y);
    return sorted;
}

console.log(sortNumbers(3, 1, 2)); // [1, 2, 3]
// alert(sortNumbers(3, 1, 2));

/**
 * 7. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
 * The grades are computed as follows :
 * Range|Grade
 * <60|F
 * <70|D
 * <80|C
 * <90|B
 * <100|A
 */

function averageGrade(students) {
    let total = students.reduce((acc, student) => acc + student.marks, 0);
    let average = total / students.length;

    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

let students = [
    { name: 'John', marks: 80 },
    { name: 'Jane', marks: 90 },
    { name: 'Alice', marks: 70 }
];

console.log(averageGrade(students)); // B

