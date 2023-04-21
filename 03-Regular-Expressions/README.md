# Note

## Test method
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method.
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

The .test() method is **case sensitive**.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

The test method here returns true.

## Different possibilities
You can search for multiple patterns using the *alternation* or *OR* operator.  

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.  

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

## Case insensitive
You can match uppercase and lowercase together using the *i* flag. For example:

```js
let testStr = "freeCodeCamp";
let testRegex = /freecodeCAMP/i;
testRegex.test(testStr);
```

This regex can match the strings freecodecamp, FrEeCODEcamp, and others.

## Extract matches
You can extract the actual matches you found with the .match() method. To use this method, apply the method on a string and pass in the regex inside the parentheses.

```js
// First example
"Hello, World!".match(/Hello/);

// Second example
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

```js
'string'.match(/regex/);

/regex/.test('string');
```

## Find more than the first match
To search or extract a pattern more than once, you can use the global search flag *g*.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

And here match returns the value ["Repeat", "Repeat", "Repeat"].

Hey! You can have multiple flags on your regex like */search/gi*.


## Match anything with wildcard period
Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: *.*. The wildcard character *.* will match any one character. It's also called **dot** and **period**. 

For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";

let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Both of these test calls would return true (hu from humStr hum and hu from hugStr hug).

## Match single character with multiple possibilities
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

## Match letters
Inside a character set, you can define a range of characters to match using a hyphen character: *-*.

For example, to match lowercase letters a through e you would use [a-e].

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;

catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

In order, the three match calls would return the values ["cat"], ["bat"], and null.

## Match numbers and letters
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers. For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set:

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;

jennyStr.match(myRegex);
```

## Matsch single characters not specified
You cab also create a set of characters that you do not want to match. To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, */[^aeiou]/gi* matches all characters that are not a vowel.
