# TypeScript Basics

TypeScript allows you to write statically-typed JavaScript code. Here I'll
describe how to install, compile, and create basic type and object definitions
using TypeScript.

-- Chris Alexander

## Installation
    npm install -g typescript

A global install (-g) allows you to run the TypeScript compiler from the
command line.

## Compilation
0. Create a file with the ".ts" extension. We'll call it "myfile.ts".
0. Compile your .ts file:

    tsc myfile.ts
    
0. Now you have myfile.js, which will run in any browser

## Type Annotations
When you define a variable, you can define a type, like string, number, or
boolean. TypeScript will enforce the type. 

    let author: string;
    author = "William Gibson";

    let numPages: number;
    numPages = 333;

    let finished: boolean;
    finished = true;

As a test, add this to myfile.ts:

    let name: string;
    name = 123;
    
If you run this code through the TypeScript compiler, it will throw an error:

    Type 'number' is not assignable to type 'string'
    
Then, change name to a string. The compiler will successfully create a .js file
containing your code.

## Lists
Building on the basic type annotations, you can define lists of each type.

    let listOfNumbers: number[];
    listOfNumbers = [1, 2, 3];

    let listOfStrings: string[]; 
    listOfStrings = ['dinosaur', 'bird', 'turtle'];

    let listOfBools: boolean[];
    listOfBools = [true, true, false];
    
## Objects + Interfaces
With TypeScript we can define an interface to enforce the structure of an object:

    interface Bird {
      name: string;
      speed: number;
    }

Here we're asserting that an object of type Bird must contain two properties:
a name of type string, and a speed of type number. Next let's define a class to
manage a list of birds:

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
    
Note how we're using the Bird interface within the class. In the constructor,
the caller must pass in a list of birds. When adding a bird, the caller must
pass a single bird. And we store the list of birds in the birds property of
the class. The birds property is private so it can't be accessed outside of
the class.

Next let's create a new flock of birds:

    let flock = new Flock([
      { name: 'eagle',  speed: 20 },
      { name: 'pigeon', speed: 10 } 
    ]);

We can then add a bird to the flock, and print the full list:

    flock.addBird({ name: 'ostrich', speed: 5 });
    flock.logFlock();
    
Try adding a bird without the speed, or with an extra property like color.
The Typescript compiler will inform you that you are violating the interface.
Similarly, if you try to access the private birds member of the object, you
will get an error.

That's it for this basic introduction to TypeScript. Hope it was helpful.