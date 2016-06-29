# First 

Write a function called "createPuppy" that takes two parameters.

The first parameter should be a string for the puppy's name.

The second parameter should be a callback function.

"makePuppy" should create a new object literal with a name, type, and createdAt properties.

The callback function should take the puppy object as a parameter.

Here's how we'd use the function:

```js
createPuppy('fido', function(puppy){
  console.log(puppy)
});
```

# Update

Update `createPuppy`. Change the callback signature so that it takes two parameters.

The first parameter will be for any errors, the second parameter will be the puppy.

Update "createPuppy" so that if we don't give it a name, we pass "true" as the first argument and we 
don't pass a puppy object.

```js
createPuppy(null, function(err, puppy){
  if(err) {
    console.log("No name!");
  } else {
    console.log(puppy);
  }
});
```
