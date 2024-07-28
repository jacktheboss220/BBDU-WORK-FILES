/** 
 * 1. Write a JavaScript function to check whether an `input` is an array or not.
 * Test Data :
 * console.log(is_array('w3resource'));
 * console.log(is_array([1, 2, 4, 0]));
 * false
 * true
*/

function is_array(input) {
    return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


/**
 * 2. Write a JavaScript function to clone an array.
 * Test Data :
 * console.log(array_Clone([1, 2, 4, 0]));
 * console.log(array_Clone([1, 2, [4, 0]]));
 * [1, 2, 4, 0]
 * [1, 2, [4, 0]]
 */

function array_Clone(input) {
    return input.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/**
 * 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n'.
 * elements of the array.
 * Test Data :
 * console.log(first([7, 9, 0, -2]));
 * console.log(first([],3));
 * console.log(first([7, 9, 0, -2],3));
 * console.log(first([7, 9, 0, -2],6));
 * console.log(first([7, 9, 0, -2],-3));
 * Expected Output :
 * 7
 * []
 * [7, 9, 0]
 * [7, 9, 0, -2]
 * []
 */

function first(input, n) {
    if (n == null) {
        return input[0];
    }
    if (n < 0) {
        return [];
    }
    return input.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));


/**
 * 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n'.`
 * elements of the array.
 * Test Data :
 * console.log(last([7, 9, 0, -2]));
 * console.log(last([7, 9, 0, -2],3));
 * console.log(last([7, 9, 0, -2],6));
 * Expected Output :
 * -2
 * [9, 0, -2]
 * [7, 9, 0, -2]
 */

function last(input, n) {
    if (n == null) {
        return input[input.length - 1];
    }
    if (n < 0) {
        return [];
    }
    return input.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

/** 
 * 5. Write a simple JavaScript program to join all elements of the following array into a string.
 * Sample array : myColor = ["Red", "Green", "White", "Black"];
 * Expected Output :
 * "Red,Green,White,Black"
 * "Red,Green,White,Black"
 * "Red+Green+White+Black"
*/

function joinArray(input, separator) {
    return input.join(separator);
}

let myColor = ["Red", "Green", "White", "Black"];
console.log(joinArray(myColor, ','));
console.log(joinArray(myColor, '+'));
console.log(joinArray(myColor, ' '));

/**
 * 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
 * For example if you accept 025468 the output should be 0-254-6-8.
*/

function insertDashes(input) {
    let result = input.toString().split('');
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 == 0 && result[i + 1] % 2 == 0) {
            result.splice(i + 1, 0, '-');
        }
    }
    return result.join('');
}

console.log(insertDashes('025468'));

/**
 * 7. Write a JavaScript program to sort the items of an array.
 * Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 * Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sortArray(input) {
    return input.sort((a, b) => a - b);
}

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortArray(arr1));

/**
 * 8. Write a JavaScript program to find the most frequent item in an array.
 * Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Sample Output : a ( 5 times )
*/

function mostFrequent(input) {
    let result = {};
    let max = 0;
    let maxItem;
    input.forEach(item => {
        if (result[item]) {
            result[item]++;
        } else {
            result[item] = 1;
        }
        if (result[item] > max) {
            max = result[item];
            maxItem = item;
        }
    });
    return `${maxItem} ( ${max} times )`;
}

let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr2));

/**
 * 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. 
 * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

function swapCase(input) {
    return input.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

console.log(swapCase('The Quick Brown Fox'));

/**
 * 10. Write a JavaScript program that prints the elements of the following array.
 * Note : Use nested for loops.
 * Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 * Sample Output :
 * "row 0"
 * " 1"
 * " 2"
 * " 1"
 * " 24"
 * "row 1"
 * ------
 * ------
*/

function printArray(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`row ${i}`);
        for (let j = 0; j < input[i].length; j++) {
            console.log(input[i][j]);
        }
    }
}

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
printArray(a);

/**
 * 11. Write a JavaScript program to find the sum of squares of a numerical vector.
*/

function sumOfSquares(input) {
    return input.reduce((acc, curr) => acc + curr * curr, 0);
}

console.log(sumOfSquares([1, 2, 3, 4, 5]));

/**
 * 12. Write a JavaScript program to compute the sum and product of an array of integers.
*/

function sumAndProduct(input) {
    return {
        sum: input.reduce((acc, curr) => acc + curr, 0),
        product: input.reduce((acc, curr) => acc * curr, 1)
    };
}

console.log(sumAndProduct([1, 2, 3, 4, 5]));

/**
 * 13. Write a JavaScript program to add items to a blank array and display them.
 * Sample Screen :
 * 
 * Output
 * Element O = 23
 * Element 1 = 12
 * Element 2 - 25
*/

// <input type="text" id="inputText">
// <p id="output"></p>
// <button id="addButton">Add</button>
// <button id="displayButton">Display</button>

let result = [];
function addItems(input) {
    result.push(input);
}

function displayItems() {
    // let p = document.createElement('p');
    result.forEach((item, index) => {
        p.innerHTML += `Element ${index} = ${item}<br>`;
    });
}

// const inputText = document.getElementById('inputText');
// const addButton = document.getElementById('addButton');
// const displayButton = document.getElementById('displayButton');

// addButton.addEventListener('click', () => {
//     addItems(inputText.value);
// });

// displayButton.addEventListener('click', () => {
//     displayItems();
//     document.body.appendChild(p);
// });

/**
 * 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

function removeDuplicates(input) {
    return input.filter((item, index) => input.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]));

/**
 * 15. We have the following arrays :
 * color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 * o = ["th","st","nd","rd"]
 * Write a JavaScript program to display the colors in the
 * following way :
 * "1st choice is Blue ."
 * "2nd choice is Green."
 * "3rd choice is Red."
 * - - - - - - - - - - - - -
 * Note : Use ordinal numbers to tell their position.
*/

function displayColors(color) {
    let o = ["th", "st", "nd", "rd"];
    color.forEach((item, index) => {
        console.log(`${index + 1}${o[index + 1]} choice is ${item}`);
    });
}

let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
displayColors(colors);

/**
 * 16. Write a JavaScript program to find the leap years in a given range of years.
*/

function findLeapYears(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(findLeapYears(2000, 2024));

/**
 * 17. Write a JavaScript program to shuffle an array.
*/

function shuffleArray(input) {
    return input.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * 18. Write a JavaScript program to perform a binary search.
 * Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
 * Sample array :
 * var items = [1, 2, 3, 4, 5, 7, 8, 9];
 * Expected Output :
 * console.log(binary_Search(items, 1)); //0
 * console.log(binary_Search(items, 5)); //4
*/

function binarySearch(input, target) {
    let start = 0;
    let end = input.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (input[mid] === target) {
            return mid;
        } else if (input[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

let items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items, 1));
console.log(binarySearch(items, 5));

/**
 * 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
 * Sample array :
 * array1 = [1,0,2,3,4];
 * array2 = [3,5,6,7,8,13];
 * Expected Output :
 * [4, 5, 8, 10, 12, 13]
*/

function sumOfArrays(array1, array2) {
    let result = [];
    let length = Math.max(array1.length, array2.length);
    for (let i = 0; i < length; i++) {
        result.push((array1[i] || 0) + (array2[i] || 0));
    }
    return result;
}

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
console.log(sumOfArrays(array1, array2));

/**
 * 20. Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(input) {
    let result = [];
    input.forEach((item, index) => {
        if (input.indexOf(item) !== index && !result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]));

/**
 * 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
 * Sample Data :
 * console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
 * [1, 2, 3, 4, 5, 6]
 * console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
 * [1, 2, 3, [[4]], 5, 6]
*/

function flatten(input, shallow) {
    if (shallow) {
        return input.flat();
    } else {
        return input.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
    }
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));

/**
 * 22. Write a JavaScript program to compute the union of two arrays.
 * Sample Data :
 * console.log(union([1, 2, 3], [100, 2, 1, 10]));
 * [1, 2, 3, 10, 100]
*/

function union(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

/**
 * 23. Write a JavaScript function to find the difference between two arrays.
 * Test Data :
 * console.log(difference([1, 2, 3], [100, 2, 1, 10]));
 * ["3", "10", "100"]
 * console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
 * ["6"]
 * console.log(difference([1, 2, 3], [100, 2, 1, 10]));
 * ["3", "10", "100"]
*/

function difference(array1, array2) {
    let arr1 = array1.flat(Infinity);
    let arr2 = array2.flat(Infinity);
    return arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

/**
 * 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
 * Sample array : [NaN, 0, 15, false, -22, ',undefined, 47, null]
 * Expected result : [15, -22, 47]
*/

function removeFalsy(input) {
    return input.filter(item => item);
}

console.log(removeFalsy([NaN, 0, 15, false, -22, ',undefined', 47, null]));


/* 25. Write a JavaScript function to sort the following array of
objects by title value.
Sample object:

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The HungerGames', libraryID: 3245 }
];

Expected result:
[
  { author: 'Suzanne Collins ', title: 'Mockingjay: The Final Book of The HungerGames', libraryID: 3245 },
  { author: 'Steve Jobs ', title: ' Walter Isaacson', libraryID: 4264 },
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }
]
*/

function sortObjects(input) {
    return input.sort((a, b) => a.title.localeCompare(b.title));
}

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The HungerGames', libraryID: 3245 }
];

console.log(sortObjects(library));

/**
 * 26. Write a JavaScript program to find a pair of elements
(indices of the two numbers) in a given array whose sum
equals a specific target number.
Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
*/

function findPair(input, target) {
    let firstIndex = 0;
    let secondIndex = 1;

    while (firstIndex < input.length) {
        if (input[firstIndex] + input[secondIndex] === target) {
            return [firstIndex, secondIndex];
        }
        firstIndex++;
        secondIndex++;
        if (firstIndex <= input.length && secondIndex === input.length) {
            return 'No pair found';
        }
    }
}

console.log(findPair([10, 20, 10, 40, 50, 60, 70], 50));

/**
 * 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
 * Sample array : [NaN, 0, 15, false, -22, '', undefined, 47, null]
 * Expected result : [15, -22, 47]
*/

function retrieveValue(input) {
    return input.filter(item => item);
}

console.log(retrieveValue([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/**
 * 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
 * Sample array :
 * console.log(longest_common_starting_substring(['go', 'google']));
 * Expected result : "go"
*/

function longestCommonStartingSubstring(input) {
    let result = '';
    let first = input[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if (input[j][i] !== first[i]) {
                return result;
            }
        }
        result += first[i];
    }
    return result;
}

console.log(longestCommonStartingSubstring(['go', 'google']));
console.log(longestCommonStartingSubstring(['goo', 'google', 'good', 'goodbye']));
console.log(longestCommonStartingSubstring(['good', 'google', 'good', 'goodbye', 'golf']));


/**
 * 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
 * Test Data :
 * console.log(num_string_range(&#39;a&#39;, 'z', 2));
 * ['a', 'c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y']
 * console.log(num_string_range(1, 10, 2));
 * [1, 3, 5, 7, 9]
*/

function numStringRange(start, end, step) {
    let result = [];
    if (typeof start === 'string') {
        for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

console.log(numStringRange('a', 'z', 2));
console.log(numStringRange(1, 10, 2));

/**
 * 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
 * Test data :
 * var array1 = [1, 2, 3];
 * var array2 = [2, 30, 1];
 * console.log(merge_array(array1, array2));
 * [3, 2, 30, 1]
*/

function mergeArray(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}

let array11 = [1, 2, 3];
let array22 = [2, 30, 1];
console.log(mergeArray(array11, array22));