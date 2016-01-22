# TypeScript Basics

TypeScript allows you to write statically-typed JavaScript code.

## Installation
0. npm install -g typescript

## Compilation
0. Create a file with the ".ts" extension. We'll create "myfile.ts"
0. Compile your .ts file: tsc myfile.ts
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
Building on the basic type annotations, you can define lists of those types.

    let listOfNumbers: number[];
    listOfNumbers = [1, 2, 3];

    let listOfStrings: string[]; 
    listOfStrings = ['dinosaur', 'bird', 'turtle'];

    let listOfBools: boolean[];
    listOfBools = [true, true, false];