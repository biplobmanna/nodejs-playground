class Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number) {}
  setHeight(height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(width: number) {
    super(width, width);
  }

  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number): void {
    this.height = height;
    this.width = height;
  }
}

function changeShapeWidth(shape: Shape) {
  shape.setWidth(shape.width + 1);
}

const r1 = new Rectangle(10, 12);
const s1 = new Square(20);

changeShapeWidth(r1);
changeShapeWidth(s1);

console.log(r1.area());
console.log(s1.area());
