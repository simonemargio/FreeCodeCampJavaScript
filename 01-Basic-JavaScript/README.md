# Notes

## var, let, const

### var
A var variable, declared inside a function, has a functional scope: it is not accessible from the outside, it can only be used locally inside the function. The functional scope is therefore also a local scope.

Instead, created outside a function, this variable will be accessible globally and therefore also within a function. In this case, it is said to have a global scope: global scope.

```js
var greeting="Hello Simo!";
function mioesempio(){
	var hello="Hi";
}​
console.log(greeting);
console.log(hello);
```

Here *greeting* is global while *hello* is local, in fact the second print gives an error because no *hello* variable is defined.


### let
A variable declared with the let keyword is bound to the block in which it is declared. Thus, if defined within the curly braces, it is only accessible within the curly braces.

A variable declared with let cannot be re-declared within the same scope, but only in another scope (in a different block).

A variable identified with let can be updated.

A let variable must always be initialized, otherwise, we get an error.


### const
This type of variable, like let variables, has block scope, but unlike let, it cannot be updated or redeclared. Const stands for constant, so its value cannot change.

Each declaration of type const must therefore always be initialized, at the time of the declaration.

Const variables have a peculiarity: if it is true that a variable declared with const cannot be updated, its properties can be changed. Example:

```js
const hey = {
  message: "Hello Simone!",
  times: 4
}

hey.message = "How are u? :3";
```
That's right.

Summing up:
- Variables of type var have global or function (local) scope, while those declared with let and const have block (local) scope.
- Var variables can be updated or redeclared within their scope.
- Let variables can be updated but not redeclared.
- Const variables cannot be updated or redeclared.
- The var variables are automatically initialized with undefined, while the let and const variables are not initialized.
- The variables var and let can be declared without being initialized, const must be initialized during its declaration.

## Push, pop, shift and unshift Array

### Push
An easy way to append data to the end of an array is via the push() function.  
.push() takes one or more parameters and "pushes" them onto the end of the array.  

### Unshift
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

### Pop
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

### Shift
.shift() works just like .pop(), except it removes the first element instead of the last.


## Comparisons ( == , === , != , !==, > , >= , < )

### ==
In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

### ===
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

```js
3 ===  3  // true
3 === '3' // false
```

### != and !==

For != and !== they work the same way with the semantics of different.

### >

Like the equality operator, the greater > than operator will convert data types of values while comparing.

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

### >= 

Same for >=

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

## <

Like the equality operator, the less than operator converts data types while comparing.

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

## <=

Like the equality operator, the less than or equal to operator converts data types.
```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

## Type

In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
```js
typeof 3   // Return string Number
typeof '3' // Return string String
typeof 3 
```

## Objects

Here's a sample cat object:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You **can even omit the quotes for single-word string properties**, as follows:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

### Add New Properties

```js
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
```

Add a bark property to myDog and set it to a dog sound, such as "woof".

```js
myDog.bark = "woof";
```

### Delete Properties

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
```
Delete the tails property from myDog. 

```js
delete myDog.tails;
```

### Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

The first hasOwnProperty returns true, while the second returns false.
