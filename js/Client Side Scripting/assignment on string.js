/**
 * 1. Write a JavaScript function to check whether an 'input' is a string or not.
 * Test Data :
 * console.log(is_string('w3resource'));
 * true
 * console.log(is_string([1, 2, 4, 0]));
 * false
 */

function is_string(input) {
    return typeof input === 'string';
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

/**
 * 2. Write a JavaScript function to check whether a string is blank or not.
 * Test Data :
 * console.log(is_Blank(""));
 * console.log(is_Blank("abc"));
 * true
 * false
 */

function is_Blank(input) {
    return input === '';
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

/**
 * 3. Write a JavaScript function to split a string and convert it into an array of words.
 * Test Data :
 * console.log(string_to_array('Robin Singh'));
 * ['Robin', 'Singh']
 */

function string_to_array(input) {
    return input.split(' ');
}

console.log(string_to_array('Robin Singh'));

/**
 * 4. Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

function truncate_string(input, n) {
    return input.slice(0, n);
}

console.log(truncate_string('Robin Singh', 4));

/**
 * 5. Write a JavaScript function to convert a string into abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function abbrev_name(input) {
    return input.split(' ').map(word => word[0].toUpperCase()).join('') + '.';
}

console.log(abbrev_name('Robin Singh'));

/**
 * 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(email) {
    let [username, domain] = email.split('@');
    return username.slice(0, 5) + '...' + '@' + domain;
}

console.log(protect_email('robin_singh@example.com'));

/**
 * 7. Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

function string_parameterize(input) {
    return input.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, -1);
}

console.log(string_parameterize('Robin Singh from USA.'));

/**
 * 8. Write a JavaScript function to capitalize the first letter of a string.
 * Test Data :
 * console.log(capitalize("js string exercises"));
 * "Js string exercises"
 */

function capitalize(input) {
    return input[0].toUpperCase() + input.slice(1);
}

/**
 * 9. Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words("js string exercises"));
 * "Js String Exercises"
 */

function capitalize_Words(input) {
    return input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize_Words('js string exercises'));

/**
 * 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase("AaBbc"));
 * 'aAbBC'
 */

function swapCase(input) {
    return input.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

console.log(swapCase('AaBbc'));

/**
 * 11. Write a JavaScript function to convert a string into camel case.
 * Test Data :
 * console.log(camelize('JavaScript Exercises'));
 * console.log(camelize('JavaScript exercises'));
 * console.log(camelize('JavaScriptExercises'));
 * 'JavaScriptExercises'
 * 'JavaScriptExercises'
 * 'JavaScriptExercises'
 */

function camelize(input) {
    return input.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
}

console.log(camelize('JavaScript Exercises'));
console.log(camelize('JavaScript exercises'));
console.log(camelize('JavaScriptExercises'));

/**
 * 12. Write a JavaScript function to un Comm a string.
 * Test Data :
 * console.log(unCamelize('helloWorld'));
 * console.log(unCamelize('helloWorld','-'));
 * console.log(unCamelize('helloWorld','_'));
 * "hello world"
 * "hello-world"
 * "hello_world"
 */

function unCamelize(input, separator = ' ') {
    return input.split('').map(char => char === char.toUpperCase() ? separator + char.toLowerCase() : char).join('');
}

console.log(unCamelize('helloWorld'));
console.log(unCamelize('helloWorld', '-'));
console.log(unCamelize('helloWorld', '_'));

/**
 * 13. Write a JavaScript function to concatenate a given string n times (default is 1).
 * Test Data :
 * console.log(repeat("Ha!"));
 * console.log(repeat("Ha!",2));
 * console.log(repeat("Ha!",3));
 * "Ha!"
 * "Ha!Ha!"
 * "Ha!Ha!Ha!"
 */

function repeat(input, n = 1) {
    return input.repeat(n);
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));

/**
 * 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
 * Test Data :
 * console.log(insert("We are doing some exercises."));
 * console.log(insert("We are doing some
 * exercises.","JavaScript "));
 * console.log(insert("We are doing some
 * exercises.","JavaScript ",18));
 * "We are doing some exercises."
 * "JavaScript We are doing some exercises."
 * "We are doing some JavaScript exercises."
 */

function insert(input, string = '', position = 1) {
    return input.slice(0, position) + string + input.slice(position);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

/**
 * 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
 * Test Data :
 * console.log(humanize_format());
 * console.log(humanize_format(1));
 * console.log(humanize_format(8));
 * console.log(humanize_format(301));
 * console.log(humanize_format(402));
 * "1st"
 * "8th"
 * "301st"
 * "402nd"
 */

function humanize_format(n = 0) {
    if (n % 100 >= 11 && n % 100 <= 13) {
        return n + 'th';
    }
    switch (n % 10) {
        case 1:
            return n + 'st';
        case 2:
            return n + 'nd';
        case 3:
            return n + 'rd';
        default:
            return n + 'th';
    }
}

console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));

/**
 * 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
 * Test Data :
 * console.log(text_truncate('We are doing JS string exercises.'))
 * console.log(text_truncate('We are doing JS string exercises.',19))
 * console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 * "We are doing JS string exercises."
 * "We are doing JS ..."
 * "We are doing !!"
 */

function text_truncate(input, n = input.length, ellipsis = '...') {
    return input.length > n ? input.slice(0, n) + ' ' + ellipsis : input;
}

console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));

/**
 * 17. Write a JavaScript function to chop a string into chunks of a given length.
 * Test Data :
 * console.log(string_chop('w3resource'));
 * console.log(string_chop('w3resource',2));
 * console.log(string_chop('w3resource',3));
 * ["w3resource"]
 * ["w3", "re", "so", "ur", "ce"]
 * ["w3r", "eso", "urc", "e"]
 */

function string_chop(input, n = 1) {
    return input.match(new RegExp(`.{1,${n}}`, 'g'));
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));

/**
 * 18. Write a JavaScript function to count substrings in a string.
 * Test Data :
 * console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * 2
 * console.log(count("The quick brown fox jumps over the lazy
 * dog", 'fox', false));
 * Output :
 * 1
 */

function count(input, substring, caseSensitive = false) {
    return caseSensitive ? input.split(substring).length - 1 : input.toLowerCase().split(substring.toLowerCase()).length - 1;
}

console.log(count('The quick brown fox jumps over the lazy dog', 'the'));
console.log(count('The quick brown fox jumps over the lazy dog', 'fox', false));

/**
 * 19. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer.
 * Finally return the decimal version of the binary string.
 * Test Data :
 * (100) ->; 19
 * Explanation:
 * Binary representation of 100 is 1100100
 * Reverse of 1100100 is 10011
 * Decimal form of 10011 is 19
 * (1134) ->; 945
 * Explanation:
 * Binary representation of 1134 is 10001101110
 * Reverse of 10001101110 is 1110110001
 * Decimal form of 1110110001 is 945
 */

function reverse_binary(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

console.log(reverse_binary(100));
console.log(reverse_binary(1134));

/**
 * 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,'));
 * Output :
 * '0123'
 * '12300000'
 */

function formatted_string(input, n, side = 'l') {
    return side === 'l' ? input.slice(0, -n.toString().length) + n : n + input.slice(n.toString().length);
}

console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, 'r'));