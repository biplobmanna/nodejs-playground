class Something {
  mem1: number;
  mem2: string;

  constructor(mem1 = 10, mem2 = 'some') {
    this.mem1 = mem1;
    this.mem2 = mem2 + mem1;
  }

  print() {
    console.log(`mem1: ${this.mem1} \nmem2: ${this.mem2}`);
  }
}

const some = new Something();

some.print();
