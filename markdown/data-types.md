**Note:** The unary operator `typeof` returns the type of the value stored in its operand. `typeof x` will return the type of value stored in the variable `x`

## Data Types / Values

### number

This is the type of all numbers - integers, decimals, and "special numbers" - `Infinity`, `-Infinity` and `NaN` (Not a Number). Yeah, strange.

### string

Single quotes or double quotes will work as long as they match. I tend to use single quotes, and that seems to be the style enforced by helium and related projects.

* `"this is a string"`
* `'this is also a string'`

### boolean

`true` or `false` - easy enough.

Other values can be treated as "truthy" or "falsy", meaning that when used in a conditional, they will essentially evaluate to `true` or `false`. See the MDN articles below for a good explanation of truthy and falsy values.

* [MDN - truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
* [MDN - falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### undefined

`undefined` is both a value and a type of value. `typeof undefined` will return `"undefined"`. When a variable `x` has not been assigned a value, its value is `undefined` and `typeof x` will return `"undefined"`.

## Objects

Objects are awesome! Everything is an object in JS, or it is converted ("coerced") to one when necessary. Objects are used all the time in JS, for configuration, arguments to functions, returns from functions, and so many more awesome things.

### Creating an object

    var obj = {
      x: 24,
      y: 36
      f: function() {
        return x + y;
      },
      a: []
    };
  
As demonstrated, an object can contain any kind of value. It is essentially an untyped name/value store. This can then be passed around to functions and other things. Unlike primitive values, Objects are passed *by reference*, so when you pass an object to a function, you're dealing with the same object. Note that this is something that *javascript controls* and is not a choice of the programmer. This applies to *all objects* - so if a number has been coerced to a Number (an object wrapper for the number), then your number will pass by reference. Also note that Arrays are objects, so they will be passed by reference.

    var obj = { ... };
    var f = function(o) {
      return o === obj;
    };
    console.log(obj); // true

## Functions

Functions are objects. They are also first-class values, which means they can be stored in variables and passed as arguments to functions. This is a powerful and popular feature of JavaScript. There are a couple ways to declare functions.

    function f(x) {
    	return x * 2;
    }
    
    var g = function(x, y) {
    	return x(y) * 3;
    };
    
Functions `f` and `g` can then be passed to other functions. For instance, I could call `g(f, 2)`, which would return 12 (The argument `2` times 2 in function `f` then the result multiplied by `3`). The array functions listed below take functions as their arguments, and could easily take the function `f` instead of the functions I've given them.

## Arrays

Arrays, like objects, are untyped. They are 0-indexed. There are several ways to create them, but by far the most common is the *array literal*.

    var arr = [];
    var arr2 = [1, 2, {}, [], Infinity];
    
As demonstrated, anything can go into an array. Arrays are full of awesome functionality, some of which is listed below, and the rest of which can be found in the [MDN Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Changing arrays

There are four basic functions for adding elements to an array (and a couple more advance ones that I'll skip for now). These functions change the array *in place*; in these examples `arr` will be changed.

* `arr.push(6)` - Adds `6` to the *end of the array*
* `arr.pop()` - Removes and returns the last element in the array
* `arr.unshift(6)` - Adds `6` to the *beginning of the array*
* `arr.shift()` - Removes and returns the first element in the array

### forEach

Arrays have a function called `forEach`, which takes a function as an argument, and iterates over the array. This is the preferred method of iteration.

    [1, 2, 3, 4, 5].forEach(function(item) {
    	console.log(item);
    });
    
This will output each element in the array to the console

### map

Arrays have a function called `map`, which takes a function as an argument, and iterates over the array, applying the function to each element in the array, and returning a new array with the result.

    var arr = [1, 2, 3, 4, 5].map(function(item) {
    	return item * 2;
    });
    
This returns a new array, leaving the original alone. The new array will look like this: `[2, 4, 6, 8, 10]`.

### filter

Arrays have a function called `filter`, which takes a functional as an argument and iterates over the array, applying the function to each element in the array. If the function returns a truthy value, the element will be in the resulting array; if the function returns a falsy value, the element will not be in the resulting array.

    var arr = [1, 2, 3, 4, 5].filter(function(item) {
    	return item % 2 === 0; // divisible by 2
    });
    
This returns a new array, leaving the original alone. The new array will look like this: `[2, 4]`

### A note on compatibility

These array functions are only in newer JavaScript engines. Modern browsers implement them, but older ones may not. In order to get this functionality, libraries like [lodash](https://lodash.com/) and [underscore](http://underscorejs.org/) provide similar functions. 