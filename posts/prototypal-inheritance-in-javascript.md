---
title: Prototypal Inheritance in javacript
date: June 12, 2021
description: what is prototypal Inheritance in javacript ?
redirect: false
hide: false
redirectionUrl: 'https://www.mypcethics.in/2021/06/prototypal-inheritance-in-javascript.html'
---

Before we getting into prototypal inheritance first, we will see what is  ```__proto__``` object?

Have you seen when you create an (object/array/string/function) that have some function /property in it?

![](../images/obj.png)

In the above image, we used to create an object, where we can access some functions like ```hasOwnProperty``` which is not created by myself.

let we start from AST

```
let a = {};
```

![](../images/ast-obj.png)


Here `a` is the variable declared with ```ObjectExpression``` by which it creates new instance of ```constructor``` function called ```Object```, that's how the properties of ```Object``` get inherited into the variable 'a'.

![](../images/proto.png)

Those inherited properties can be accessed by calling  ```a.__proto__```.

![](../images/proto-obj.png)

In basic ```__proto__``` is an object that has inherited properties from its parent object.


## Prototypal Inheritance:


When we search for a property that we didn’t define in a variable it will travel in the prototype chain to find the property from its prototype chain which known as prototypal inheritance.


### Eg:-

``` 
let a = {}; 
```

when we didn't define any property in it, we can access the toString function from a.

where toString is the function which is the property of the Object.


[](../images/obj-string.png)

What is the **prototype** and what is the difference between **prototype** and ```__proto__```?

The ```prototype``` is the object which can be found only in the ```constructor``` function, but the properties in the ```prototype``` can be accessed by the **instance** of the ```constructor``` function.

[](../images/prototype-proto.png)

```__proto__``` is the object in every variable which **has** the inherited properties from its parent object.

**prototype** is the object which contains all properties which **will be** inherited to its instance.











