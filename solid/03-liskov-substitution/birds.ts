class Bird {
  protected laysEggs: boolean;
  constructor(laysEggs?: boolean) {
    this.laysEggs = laysEggs ?? true;
  }
}

class FlyingBird extends Bird {
  protected canBirdFly: boolean;
  constructor(canBirdFly?: boolean, laysEggs?: boolean) {
    super(laysEggs);
    this.canBirdFly = canBirdFly ?? true;
  }
  canFly(): void {
    console.log(`Bird ${this.canBirdFly ? 'can' : 'cannot'} fly!`);
  }
}

class SwimmingBird extends Bird {
  protected canBirdSwim: boolean;
  constructor(canBirdSwim?: boolean, laysEggs?: boolean) {
    super(laysEggs);
    this.canBirdSwim = canBirdSwim ?? true;
  }
  canSwim(): void {
    console.log(`Bird ${this.canBirdSwim ? 'can' : 'cannot'} swim!`);
  }
}

class Penguin extends SwimmingBird {
  canSwim(): void {
    console.log(`Penguin can swim!`);
  }
}

class Sparrow extends FlyingBird {
  canFly(): void {
    console.log(`Sparrow can fly!`);
  }
}

function canSwimmingBirdsSwim(bird: SwimmingBird) {
  bird.canSwim();
}

function canFlyingBirdsFly(bird: FlyingBird) {
  bird.canFly();
}

const Pingoo = new Penguin();
const Swallow = new Sparrow();

canFlyingBirdsFly(Swallow);
canSwimmingBirdsSwim(Pingoo);
