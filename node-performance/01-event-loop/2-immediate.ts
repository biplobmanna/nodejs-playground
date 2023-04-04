// Non Deterministic Behaviour

console.log('ROOT >> Start');

setTimeout(() => {
  console.log('\t>>  setTimeout - 1');
}, 0);
setImmediate(() => {
  console.log('\t>> setImmediate - 1');
});

setTimeout(() => {
  console.log('\t>> setTimeout - 2 >> Begin');
  setTimeout(() => {
    console.log('\t\t>>  setTimeout - 3');
  }, 0);
  setImmediate(() => {
    console.log('\t\t>> setImmediate - 2');
  });

  console.log('\t>> setTimeout - 2 >> End');
}, 0);

console.log('ROOT >> End');
