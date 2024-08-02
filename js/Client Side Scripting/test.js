const sentence = 'Hello World from test.js';
// const sentence = prompt('Enter a sentence: '); in the browser

// function countSpaces(sentence) {
//     return sentence.split(' ').length - 1;
// }

// console.log(countSpaces(sentence));
// return sentence.match(/ /g).length


function stringToWords(sentence) {
    return sentence.split(' ');
    // let arr = sentence.split(' ');
    // return arr;
}

console.log(stringToWords(sentence));

function stringToAbbreviation(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase()).join('');
}

console.log(stringToAbbreviation(sentence));