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