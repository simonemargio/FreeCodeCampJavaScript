# Note

## Prevent data mutation
To ensure your data doesn't change, JavaScript provides a function Object.freeze.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};

Object.freeze(obj);

obj.review = "bad";
obj.newProp = "Test";

console.log(obj); 
```

The obj.review and obj.newProp assignments will result in errors.

## Anonymous functions

An anonymous function is a function without a name. The following shows how to define an anonymous function:

```js
(function () {
   //...
});
```

Note that if you don’t place the anonymous function inside the (), you’ll get a syntax error. The () makes the anonymous function an expression that returns a function object.

An anonymous function is not accessible after its initial creation. Therefore, you often **need to assign it to a variable**.

For example, the following shows an anonymous function that displays a message:

```js
let show = function() {
    console.log('Anonymous function');
};

show();
```

In this example, the anonymous function has no name between the function keyword and parentheses ().

Because we need to call the anonymous function later, we assign the anonymous function to the show variable.

Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don’t need to wrap the anonymous function inside the parentheses ().

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When **there is no function body, and only a return value**, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code:

```js
const myFunc = () => "value";
```

Just like a regular function, you can pass arguments into an arrow function:

```js
const doubler = (item) => item * 2;

doubler(4);
```

```js
const multiplier = (item, multi) => item * multi;

multiplier(4, 2);
```

In order to help us create more flexible functions, ES6 introduces default parameters for functions:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

The console will display the strings Hello John and Hello Anonymous.

## Function ...args

You can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.


## Array ...array

The spread (...) syntax allows an iterable, such as an array, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```

Copy arr1 in arr2.

## Destructuring assignment

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object. For example:

```js
const user = { name: 'John Doe', age: 34 };

// Old in ES5
const name = user.name;
const age = user.age;

// New in ES6
const { name, age } = user;
```

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is. So name would have a value of the string John Doe, and age would have the number 34. 

Also destructuring allows you to assign a new variable name when extracting values. Same example:

```js
const user = { name: 'John Doe', age: 34 };


const { name: userName, age: userAge } = user;
```

Here the value of userName would be the string John Doe, and the value of userAge would be the number 34.


Same for destructure values from nested objects.

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

// Extract the values of object properties and assign them to variables with the same name
const { johnDoe: { age, email }} = user;

// Assign an object properties' values to variables with different names
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

In some cases, you can destructure the object in a function argument itself.

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```
This effectively destructures the object sent into the function. This can also be done in-place:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

## Module Script
JavaScript started with a small role to play on an otherwise mostly HTML web.
In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. 
In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

```js
<script type="module" src="filename.js"></script>
```
A script that uses this module type can now use the import and export features.

## Export
If you want to use a function in several different JavaScript files or to share it with these other files, you first need to export it.
The above is a common way to export a single function, but you can achieve the same thing like this:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

When you export a variable or function, you can import it in another file and use it without having to rewrite the code.

```js
export { add, anotherFunction, ... };
```

## Import
Import allows you to choose which parts of a file or module to load.

```js
import { add } from './math_functions.js';
```

Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

```js
import { add, subtract } from './math_functions.js';
```

## Import all 
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the *import * as* syntax. 

```js
import * as myMathModule from "./math_functions.js";
```

The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

## Export default
There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const.

## Import default
To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

```js
import add from "./math_functions.js";
```

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

## Promise
Promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

Resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

```js
myPromise.then(result => {
  
});
```

Catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

```js
myPromise.catch(error => {
  
});
```