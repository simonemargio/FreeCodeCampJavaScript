/*

Created by Simone Margio
www.simonemargio.im

Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /./; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);


// Solution
let alphabetRegexV2 = /\w/g;