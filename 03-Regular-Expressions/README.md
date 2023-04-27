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

## Match single characters not specified
You cab also create a set of characters that you do not want to match. To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, */[^aeiou]/gi* matches all characters that are not a vowel.

## Match characters that occur one or more times
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the **character or pattern has to be present consecutively**. That is, the character has to repeat one after the other.

For example, */a+/g* would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

## Match characters that occur zero or more times
Different from the character +, if we want to count the occurrence of zero value we must use the character *.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

## Match Beginning String Patterns
We see the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);

let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

The first test call would return true, while the second would return false.

## Match Ending String Patterns
You can search the end of strings using the dollar sign character $ at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

The first test call would return true, while the second would return false.

## Match All Letters and Numbers
The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;

let numbers = "42";
let varNames = "important_var";

longHand.test(numbers);
shortHand.test(numbers);

longHand.test(varNames);
shortHand.test(varNames);
```

All four of these test calls would return true. These shortcut character classes are also known as shorthand character classes.

## Match Everything But Letters and Numbers
You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";

numbers.match(shortHand);
sentence.match(shortHand);
```

The first match call would return the value ["%"] and the second would return ["!"].

## Match All Numbers
The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

## Match All Non-Numbers
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

## Match Whitespace
You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

This match call would return [" ", " "].

## Match Non-Whitespace Characters
Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

The value returned by the .length method would be 32.

