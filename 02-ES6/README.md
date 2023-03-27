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