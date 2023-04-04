interface VehicleInterface {
  name: string;
  model: string;
  price: number;
  printDetails(): void;
}

interface CarInterface extends VehicleInterface {
  noOfPassengers: number;
  hasFourWheelDrive: boolean;
  hasInfotainment: boolean;
  hasAMT: boolean;
  printLuxuryFeatures(): void;
}

interface TruckInterface extends VehicleInterface {
  carryingCapacity: number;
  weightLimit: number;
  printCarryingCapacity(): void;
}

class MercedesBenz implements CarInterface {
  name: string;
  model: string;
  price: number;
  noOfPassengers: number;
  hasFourWheelDrive: boolean;
  hasInfotainment: boolean;
  hasAMT: boolean;

  constructor() {
    this.name = 'Mercedes Benz';
    this.model = 'e1';
    this.price = 5000000;
    this.noOfPassengers = 2;
    this.hasFourWheelDrive = true;
    this.hasInfotainment = true;
    this.hasAMT = true;
    this.hasInfotainment = true;
  }

  printLuxuryFeatures(): void {
    console.log(`1. has four wheel drive`);
    console.log(`2. has infotainment`);
    console.log(`3. has AMT`);
  }

  printDetails(): void {
    console.log(`printing all car details!`);
  }
}

class AshokLeyland implements TruckInterface {
  name: string;
  model: string;
  price: number;
  carryingCapacity: number;
  weightLimit: number;

  constructor() {
    this.name = 'Ashok Leyland L1';
    this.model = 'L1';
    this.price = 50000000;
    this.carryingCapacity = 1000;
    this.weightLimit = 10000;
  }

  printCarryingCapacity(): void {
    console.log(`1. carrying capacity = ${this.carryingCapacity}`);
    console.log(`2. weight limit = ${this.weightLimit}`);
  }
  printDetails(): void {
    console.log(`printing all truck details!`);
  }
}

const mbe1 = new MercedesBenz();
mbe1.printDetails();
mbe1.printLuxuryFeatures();

const al1 = new AshokLeyland();
al1.printDetails();
al1.printCarryingCapacity();
