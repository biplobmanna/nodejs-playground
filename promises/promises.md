# Promises

- object representing the eventual completion or failure of an async operation
- it's a return object to which you pass callbacks
- instead of the old approach of passing callbacks to functions
  - chaining : common need to execute 2+ async op back-to-back where each subsequent op starts with the success of the previous op, with the result of the previous op
  - callbacks are attached to the returned promise object instead of being passed into a function
  - `then()` function returns a new promise different to the original
- promises and callbacks are queued in order for execution
- with these things, we can create longer chains for processing, where each promise represents one async step in the chain
- `catch(failureCallback)` is short for `then(null, failureCallback)`
  - so if error handling code is same for all steps, then it can be attached at the end of the chain
- in a promise chain, intermediate steps MUST return results
  - otherwise callbacks won't catch the result of a previous operation
  - also called **"floating"** promise
  - can easily lead to race conditions, and dirty reads
- nesting can lead to careless composition
  - but nesting is useful as a control structure for `catch` statements
  - i.e., custom `catch` statement for that particular call operation
  - a nested `catch` only handles error related to its scope
- chaining can also be done after a `catch` if the catch does new operation

## Common Mistakes

1. not chaining things properly
  a. happens when we create a new promise but forget to return it (since async func run separately)
  b. the chain is broken as a consequence
  c. we get two independent chains racing
2. nest unnecessarily
  a. limits the scope of error handlers, which if unintended, can lead to uncaught errors
  
```javascript
doSomething()
  .then(function (result) {
    // Forgot to return promise from inner chain
    // unnecessary nesting
    // async func runs separately
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
    // could be fixed with `return doSomethingElse()`
  })
  .then(() => doFourthThing()); // runs independently of `doSomethingElse()`
// Forgot to terminate chain with a catch!
```
