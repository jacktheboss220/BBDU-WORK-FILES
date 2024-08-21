/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
 * Sample object:
 * var student = {
 * name : 'David Rayy',
 * sclass : 'VI',
 * rollno : 12 };
 * Sample Output: name,sclass,rollno
 */

function listProperties(obj) {
    return Object.keys(obj).join(',');
}

const student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

console.log(listProperties(student));

/**
 * 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 * Sample object:
 * var student = {
 * name : 'David Rayy',
 * sclass : 'VI',
 * rollno : 12 };
 */

function deleteProperty(obj, prop) {
    console.log("Before deleting:", obj);
    delete obj[prop];
    console.log("After deleting:", obj);
    return obj;
}

console.log(deleteProperty(student, 'rollno'));

/**
 * 3. Write a JavaScript program to get the length of a JavaScript object.
 * Sample object :
 * var student = {
 * name : 'David Rayy',
 * sclass : 'VI',
 * rollno : 12 };
 */

function objectLength(obj) {
    return Object.keys(obj).length;
}

console.log(objectLength(student));

/**
 * 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 * var library = [
 * {
 * author: 'Bill Gates',
 * title: 'The Road Ahead',
 * readingStatus: true
 * },
 * {
 * author: 'Steve Jobs',
 * title: 'Walter Isaacson',
 * readingStatus: true
 * },
 * {
 * author: 'Suzanne Collins',
 * title: 'Mockingjay: The Final Book of The Hunger Games',
 * readingStatus: false
 * }];
 */

function displayReadingStatus(books) {
    books.forEach(book => {
        console.log(`Book: ${book.title}\nAuthor: ${book.author}\nReading status: ${book.readingStatus}`);
    });
}

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

displayReadingStatus(library);

/**
 * 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
 * Volume of a cylinder : V = πr 2 h
 * where r is the radius and h is the height of the cylinder.
 */

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        return Math.PI * this.radius ** 2 * this.height;
    }
}

const cylinder = new Cylinder(5, 10);
console.log(cylinder.volume().toFixed(4));

/**
 * 6. Write a bubble sort algorithm in JavaScript.
 * Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping
 * through the list to be sorted,
 * Sample Data: [6,4,0, 3,-2,1]
 * Expected Output : [-2, 0, 1, 3, 4, 6]
 */

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([6, 4, 0, 3, -2, 1]));

/**
 * 7. Write a JavaScript program that returns a subset of a string.
 * Sample Data: dog
 * Expected Output: ['d', 'do', 'dog', 'o', 'og', 'g']
 */

function subsetOfString(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

console.log(subsetOfString('dog'));

/**
 * 8. Write a JavaScript program to create a clock.
 * Note: The output will come every second.
 * Expected Console Output :
 * '14:37:42'
 * '14:37:43'
 * '14:37:44'
 * '14:37:45'
 * '14:37:46'
 */

function clock() {
    setInterval(() => {
        const date = new Date();
        console.log(date.toLocaleTimeString());
    }, 1000);
}

clock();

/**
 * 9. Write a JavaScript program to calculate circle area and perimeter.
 * Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
 */

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.area());
console.log(circle.perimeter());

/**
 * 10. Write a JavaScript program to sort an array of JavaScript objects.
 * Sample Object :
 * var library = [
 *     {
 *         title: 'The Road Ahead',
 *         author: 'Bill Gates',
 *         libraryID: 1254
 *     },
 *     {
 *         title: 'Walter Isaacson',
 *         author: 'Steve Jobs',
 *         libraryID: 4264
 *     },
 *     {
 *         title: 'Mockingjay: The Final Book of The Hunger Games',
 *         author: 'Suzanne Collins',
 *         libraryID: 3245
 *     }];
 *     Expected Output:
 *  [[object Object] {
 *     author: 'Walter Isaacson',
 *     libraryID: 4264,
 *     title: 'Steve Jobs'
 *      }, [object Object] {
 *     author: 'Suzanne Collins',
 *     libraryID: 3245,
 *     title: 'Mockingjay: The Final Book of The Hunger Games'
 *      }, [object Object] {
 *     author: 'The Road Ahead',
 *     libraryID: 1254,
 *     title: 'Bill Gates'
 * }]
*/

function sortObjects(arr, key) {
    return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
}

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

console.log(sortObjects(library, 'libraryID'));

/**
 * 11. Write a JavaScript function to print all the methods in a JavaScript object.
 * Test Data :
 * console.log(all_properties(Array));
 * ['length', 'name', 'arguments', 'caller', 'prototype', 'isArray', 'observe', 'unobserve']
*/

function allProperties(obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(allProperties(Array));

/**
 * 12. Write a JavaScript function to parse an URL.
 */

function parseURL(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash
    };
}

// console.log(parseURL('https://www.w3resource.com/javascript-exercises/javascript-object-exercise-1.php'));

/**
 * 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
 */

function allProperties(obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(allProperties(Array));

/**
 * 14. Write a JavaScript function to retrieve all the values of an object&#39;s properties.
 */

function allValues(obj) {
    return Object.values(obj);
}

console.log(allValues({ name: 'David Rayy', sclass: 'VI', rollno: 12 }));

/**
 * 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
 */

function objectToList(obj) {
    return Object.entries(obj);
}

console.log(objectToList({ name: 'David Rayy', sclass: 'VI', rollno: 12 }));

/**
 * 16. Write a JavaScript function to get a copy of the object where the key become the values and the values are the keys.
 */

function reverseObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

console.log(reverseObject({ name: 'David Rayy', sclass: 'VI', rollno: 12 }));

/**
 * 17. Write a JavaScript function to check whether an object contains a given property.
 */

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

console.log(hasProperty({ name: 'David Rayy', sclass: 'VI', rollno: 12 }, 'name'));

/**
 * 18. Write a JavaScript function to check whether a given value is a DOM element.
 */

function isDOMElement(obj) {
    return obj instanceof Element;
}

console.log(isDOMElement(document.querySelector('body')));