/**
 * 1. Create a function that will find the nth Fibonacci number using recursion
 */

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

/**
 * 2. Create a function that will return a Boolean specifying if a number is prime
 */

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));

/**
 * 3. Calculate the sum of digits of a positive integer number
 */

function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfDigits(12345));

/**
 * 4. Print the first 100 prime numbers
 */

function printPrimes(n) {
    let count = 0;
    let i = 2;
    while (count < n) {
        if (isPrime(i)) {
            console.log(i);
            count++;
        }
        i++;
    }
}

printPrimes(100);

/**
 * 5. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
 */

function nPrimesGreaterThan(n, startAt) {
    let primes = [];
    let i = startAt + 1;
    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes;
}

console.log(nPrimesGreaterThan(10, 100));

/**
 * 6. Create a function that will merge two arrays and return the result as a new array
 */

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

/**
 * 7. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both.
 */

function symmetricDifference(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));

/**
 * 8. Write a JavaScript function that returns a string that has letters in alphabetical order.
 * Example string : 'webmaster'
 * Expected Output : 'abeemrstw'
 * Assume punctuation and numbers symbols are not included in the passed string.
 */

function sortString(str) {
    return str.split('').sort().join('');
}

console.log(sortString('webmaster'));

/**
 * 9. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 * Note : As the letter 'y' can be regarded as both a vowel and a consonant, we
 * do not count 'y' as vowel here.
 * Example string : 'The quick brown fox'
 * Expected Output : 5
 */

function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));

/**
 * 10. Write a JavaScript function that checks whether a number is perfect.
 */

function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

console.log(isPerfect(28));

/**
 * 11. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
 * Sample arguments : 'w3resource.com', 'o'
 * Expected output : 2
 */

function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences('w3resource.com', 'o'));

/**
 * 12. Write a JavaScript program to pass a 'JavaScript function' as a parameter
 */

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function applyOperation(a, b, operation) {
    return operation(a, b);
}

console.log(applyOperation(2, 3, add));
console.log(applyOperation(2, 3, multiply));