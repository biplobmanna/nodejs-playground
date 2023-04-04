const TIMEOUT_MS = 10;

console.log('ROOT >> Start');

setTimeout(() => {
  console.log('\t>>  setTimeout - 1');
}, TIMEOUT_MS);
setImmediate(() => {
  console.log('\t>> setImmediate - 1');
});

setTimeout(() => {
  console.log('\t>> setTimeout - 2 >> Begin');
  setTimeout(() => {
    console.log('\t\t>>  setTimeout - 3');
  }, TIMEOUT_MS);
  setImmediate(() => {
    console.log('\t\t>> setImmediate - 2');
  });

  console.log('\t>> setTimeout - 2 >> End');
}, TIMEOUT_MS);

console.log('ROOT >> End');
