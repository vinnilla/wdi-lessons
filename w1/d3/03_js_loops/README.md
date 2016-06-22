# JavaScript Control Structures

## Lesson Objectives

- List the basic units of (structured) imperative programming: blocks, 
  procedures, conditionals and loops.
- Define algorithm.
- Use `if`/`else` statements to branch control flow based on a given 
  conditional statement.
- Use `else if` to allow branching flow with multiple conditional 
  statements.
- Identify the necessary parts of a `while` loop (action, mutable 
  condition, and condition update).
- Identify the parts of a `for` loop (iterator, break condition, and 
  condition update).
- Explain how `for` loops work with reference to `while` loops.
- Differentiate when to use `while` loops and `for` loops, and give
  specific use cases.
- Use a `for` loop to iterate over an array.

## Algorithms and Structured Programming

**[Algorithms are step-by-step instructions for solving a problem.][algo]**

Examples include: recipes, driving directions, how-to guides, etc.

> There are two basic styles of programming: declarative and imperative.
> Declarative programming is like HTML or CSS: you are *defining* something
> using a given syntax. In imperative programming, you are giving
> instructions to the computer to *do* something. Whenever you write an
> imperative program (in JavaScript, or Ruby, or Python, or Java, or C)
> you are writing algorithms.

Since the advent of "[structured programming][sp]" we build our 
algorithms in a specific way:

- we write a **procedure** that stores an algorithm,
- we write **statements** in **blocks** of code,
- we use **conditionals** to conditionally execute blocks, and
- we use **loops** to repeat blocks.

As we get more into programming "paradigms," we will learn other formats
for storing these "procedures": in objects (Object-oriented), or functions
(Functional). But the basis is always an algorithm (ie, a procedure).

**Control flow**, or which statement we perform next in the procedure,
goes in order from top to bottom, with the exception of **control
structures**: conditionals or loops.

## Conditionals (`if` Statments)

Conditionals are a way of skipping over a block of code if they do not 
pass a Boolean expression. The conditional statements in JavaScript are
`if () { … }` and `if () { … } else { … }`:

- `if (expr) { code }` means: run the `code` block if `expr` is truthy.
  
  ```js
  var num = 22;
  
  if (num % 2  === 0) {
    console.log("is even");
  }
  ```
- `if (expr) { blockA } else { blockB }` means: run `blockA` if `expr` 
  is truthy; run `blockB` if `expr` is falsy.

  ```js
  var expr = true; // var expr1 = false;
  
  if (expr) {
    console.log("expr is true!");
  } else {
    console.log("expr is false!");
  }
  ```

Finally, you can chain conditionals using `else if`:

```js
var expr1 = false; 
var expr2 = true;

if (expr1) {
  console.log("expr1 is true!");
} else if (expr2) {
  console.log("expr1 is false and expr2 is true!");
} else {
  console.log("expr1 and expr2 are false!")
}
```

<!-- #### `case` Statements -->

#### `? :`, the Ternary Operator

Another way to write a very shorthand conditional is using a ternary 
operator:

`expr1 ? expr2 : expr3` means: if `expr1` is true, run `expr2`, else run
`expr3`.

```js
true ? console.log("it is true"): console.log("it is false");
//=>  "it is false"
false ? console.log("it is true"): console.log("it is false");
//=> "it is false"
```

## Loops

Loops are a way of **repeating** a block of code if some Boolean 
expression (condition) is passed. The most important loops in JavaScript
are `while` and `for` loops.

#### While Loops: `while` and `do … while`

While loops are very simple.

`while (expr) { code }` means: while `expr` is true, repeat the `code` 
in the block. The exact order is:

- if `expr` is false, skip the block,
- else run the block of code,
- repeat…

There is a second type of while loop: `do { code } while (expr)`, which
is the same except for the order:

- run the block of code,
- if `expr` is false, continue to the next line,
- else repeat…

Basic while loops can be dangerous: if you don't change the conditional
expression within the code block, they will go in to an **infinite 
loop**. You can test this (and break your browser), by typing:

```js
while (true) {
  console.log("NOOOOO!!!!!");
}
```

Thus, every while loop needs three things: a "mutable" (or changeable)
condition with a variable, some action, and an update to the condition.
For example:

```js
var result;

do {
  result = window.confirm("Do you want me to keep creating this pop up?");
} while (result);
```

In this case, the condition is the variable `result`, the action is
`window.confirm`, and the update is `result = …`.

What are the parts in this?

```js
var fullName, firstName;

while (fullName !== "Augustus Roberts") {
  firstName = window.prompt("What's your name?");
  fullName = firstName + " Roberts";
}
```

#### `for` Loops

For loops are slightly more complex. They take a while loop, and force
you to do all those things that keep it from going in to an infinite
loop right up front:

```
for (setupCondition; testCondition; updateCondition) {
  code
}
```

The simplest example is:

```js
for (var i = 0; i < 3; i = i + 1) {
  console.log("Hip hip, hooray!");
}
```

This format is so common, where we are repeating some code a certain
number of times, that it has it's own name: *iteration*.

#### Iteration

Iteration comes from the Latin *iter*, or step. *Iteration* means that 
repeat some code a certain number of times (steps). The "iterator" is 
your condition variable, and it counts by one each time. There is a
syntactic shorthand for adding 1 to a count:

```js
var i = 0;

i = i + 1;
i += 1;
i ++;
console.log(i); // All the same thing!
```

The canonical use of iteration is to ***repeat code for every item in
an array***! In this case, the iterator stands in for the array
index for the item.

```js
var dogs = ["Kait", "Rascal", "Splatter"];

for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}
```

## Exercises

**[Load the `control.js` file and fill it in!](exercises/control.js)**

<!-- LINKS -->

[algo]: https://en.wikipedia.org/wiki/Algorithm
[sp]:   https://en.wikipedia.org/wiki/Structured_programming
