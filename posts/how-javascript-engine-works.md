---
title: How javascript engine works?
date: June 10, 2021
description: Explains how javascript engine works?
redirect: false
hide: false
redirectionUrl: 'https://www.mypcethics.in/2021/06/how-javascript-engine-works.html'
---

Browser does have a javascript runtime environment (Eg:- v8 engine) that compiles and executes the javascript code.



![How?](../images/how-meme.png "How meme")


## JS ENGINE:

#### (CODE -> PARSING -> COMPILATION -> EXECUTION)

![V8 engine](../images/v8-engine.png "V8 engine")

## Parsing:

Where javascript code is converted into tokens, using this tokens syntax parser constructs AST (Abstract syntax tree).

![AST](../images/ast.png "AST")

## Compliation:

#### JS is interpretted / compiled ?

JS is both interpretter and compiler.


#### What is interpretter and compiler ?

Interpreters take code and execute it line by line. In the compiler whole code is compiled first, new optimized version of the code is created and then executed.

At first JS engine is created only with an interpreter because it runs on the browser where the end-user can't wait for that code to compile and execute it.

But in today's world, most browsers use both interpreter (Ignition: v8) and a compiler (TurboFan: v8), where AST passed to the interpreter code is interpreted line by line compiler also will tries to optimize the code as much as it can (inlining, inline caching, copy elision). It can happen in multiple phases on runtime.

That's why JS engine compilation is also known as JIT (JUST IN TIME) compilation.

## Execution:

The bytecode produced by compilation is ready to be shipped to the execution phase, where the execution phase consists of the memory heap and call stack queue.

memory heap is a space where all variables and functions are assigned memory.

Where it has a [garbage collector](https://medium.com/@_lrlna/garbage-collection-in-v8-an-illustrated-guide-d24a952ee3b8) to manage the memory space.

A call stack queue is where the functions are declared and executed in a queue.


![Call stack](../images/call-stack.jpg "Call stack")







