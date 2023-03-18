# Notes

## Difference between let and const
Const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
Also, variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.

ChatGPT explanation
```
In JavaScript, `let` and `const` are used for declaring variables, but with some differences:

1. `let` is used to declare variables with a block scope, which means they are only accessible within the block they were defined in or any nested blocks. `let` allows the value of the variable to be changed. Example: 


let a = 10;
if (true) {
  let a = 20; // "a" is a new block-scope variable
  console.log(a); // output: 20
}
console.log(a); // output: 10

2. `const` is also used to declare variables with a block scope. However, once the variable is assigned a value, it cannot be re-assigned. The value assigned to a `const` variable remains unchanged. Example:


const a = 10;
if (true) {
  const a = 20; // "a" is a new block-scope variable with a value of 20
  console.log(a); // output: 20
}
console.log(a); // output: 10


3. `let` variables can be declared without being immediately assigned a value, whereas `const` variables must always be assigned a value when they are declared.

4. `let` variables can be declared multiple times within the same block, but `const` variables cannot be re-declared.

In summary, `let` should be used when you need to re-assign the value of a variable, and `const` should be used when you want to declare a variable with a constant value that cannot be re-assigned.
```

## Using "" and ''
In JS they have the same purpose for strings.
- var x = "This is a string"
- var x = 'This is a string"