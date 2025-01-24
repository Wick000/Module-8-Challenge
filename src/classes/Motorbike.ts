// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';



// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
  //  this.wheels = wheels.length === 2? wheels : [new Wheel(), new Wheel()];
    
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel(),];
    } else {
      this.wheels = wheels;
    }
     
    }
   doWheelie() {
     console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!"`);
    }
override printDetails( 
     )  { super.printDetails();
       console.log(`VIN ${this.vin}`)
       console.log(`Color: ${this.color}`);
       console.log(`Make: ${this.make}`);
       console.log(`Model: ${this.model}`);
       console.log(`Year: ${this.year}`);
       console.log(`Weight: ${this.weight}`);
       console.log(`Top Speed: ${this.topSpeed}`)
       console.log(`Wheeles ${this.wheels}`)
    }
  };

  
     
      

  

  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels


// Export the Motorbike class as the default export
export default Motorbike;
