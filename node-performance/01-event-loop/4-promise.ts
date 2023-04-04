console.log('ROOT >> Start');

setTimeout(() => {
  console.log('\t>> setTimeout - 1');
}, 10);
setImmediate(() => {
  console.log('\t>> setImmediate - 1');
});

setTimeout(() => {
  console.log('\t>> setTimeout - 2 >> Begin');
  setTimeout(() => {
    console.log('\t\t>> setTimeout - 3');
  }, 10);
  setImmediate(() => {
    process.nextTick(() => {
      console.log('\t\t\t>> nextTick - 3');
    });
    console.log('\t\t>> setImmediate - 2');
  });

  Promise.resolve().then(() => {
    console.log('\t\t>> Promise - 1');
  });

  process.nextTick(() => {
    process.nextTick(() => {
      console.log('\t\t\t>> nextTick - 2');
    });
    console.log('\t\t>> nextTick - 1');
  });

  console.log('\t>> setTimeout - 2 >> End');
}, 10);

Promise.resolve().then(() => {
  console.log('ROOT Promise - 0');
});

process.nextTick(() => {
  console.log('ROOT nextTick - 0');
});

console.log('ROOT >> End');
