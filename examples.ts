// --------------------// 
// TypeScript Examples //
// --------------------//

// Type annotations
let author: string;
author = "William Gibson";

let numPages: number;
numPages = 333;

let finished: boolean;
finished = true;

// Lists
let listOfNumbers: number[];
listOfNumbers = [1, 2, 3];

let listOfStrings: string[]; 
listOfStrings = ['dinosaur', 'bird', 'turtle'];

let listOfBools: boolean[];
listOfBools = [true, true, false];

// Objects
interface Bird {
  name: string;
  speed: number;
}

class Flock {
  private birds: Bird[];
      
  constructor(birds: Bird[]) {
    this.birds = birds;
  }
  
  addBird(bird: Bird) {
    this.birds.push(bird);
  }
  
  logFlock() {
    this.birds.forEach(bird => console.log(`${bird.name}: ${bird.speed}`));
  }
}

let flock = new Flock([
  { name: 'eagle',  speed: 20 },
  { name: 'pigeon', speed: 10 } 
]);

flock.addBird({ name: 'ostrich', speed: 5 });
flock.logFlock();