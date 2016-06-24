# JavaScript Objects

## Learning Objectives

- Identify the components of a JavaScript object
- Create, Read, Update and Delete properties of JavaScript Objects
- Differentiate between dot and square bracket notation

As web developers, we practice Object Oriented Programming techniques. 
With OOP, our programs are crafted from objects, which have data and behavior, 
and are used to model real world objects. During the program's execution, these 
objects interact with each other to accomplish the programming goal.

Objects are a way to organize and group our data to make it easier to interact with.

## Vocab

Object - a collection of key value pairs
Property - an association between a name (or key) and a value
Key - the name or identifier that points at a value

Objects begin and end with curly braces.
Their key value pairs are separated 

```js
var paramour = {
    name: 'Becky',
    hair: 'good'
};
```

## How to access the propertys

```js
var artist = {
    name: 'Beyoncé'
}
// dot notation
artist.name;

// square bracket notation
artist['name'];
```

> What are the visual distinctions above?

## How to add and modify Object properties

```js
var pet = {
    name: 'Snoopy'
};

// dot notation 
pet.owner = 'Charlie Brown';

// square bracket notation
pet['owner'] = 'Charlie Brown';
```

# Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
