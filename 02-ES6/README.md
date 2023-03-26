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
