"use strict";
/*
Steps to create a project

Create a directory for the project.
In the VS Code terminal, navigate to the directory. For example, cd MyFirstTSProject.

Initialize the project using
npm init -y

Initialize the TypeScript within the project using
npx tsc --init

This will create tsconfig.json file containing TypeScript configuration. Replace the content of this file with the following.

{
  "compilerOptions": {
    "rootDir": "./src", //source code directory when your TypeScript files should be
    "outDir": "./dist", //distribution directory where the compiled JS files will be saved
  }
}

It indicates that the .ts source code files will be in /src directory, and when the project is compiled, the generated JS files will be placed under the /dist directory.

Now, create the src folder in the project and create the index.ts file within it.

console.log("Hello TypeScript");
All the source code should be in the /src folder.

Steps to run the project

Compile the TypeScript files to generate JS files using
npx tsc

Run the index.js file from dist folder using
node ./dist/index.js

*/
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var PartTimeEmployee_1 = require("./PartTimeEmployee");
var Student_1 = require("./Student");
console.log("Week 9 - TypeScript Overview");
console.log("Student class ------ \n");
var s1 = new Student_1.default(101, "Mariana");
s1.showStudentDetails();
var s2 = new Student_1.default(102, "Julie", "Smith", 35.0);
s2.showStudentDetails();
var n1 = 30;
n1 = 24;
// TypeScript is statically typed language
//error - mismatched types
// n1 = "hello"
// any type allows any type of value to be assigned
//opt-out of type checking
var v1;
v1 = 10;
v1 = 3.4;
v1 = "hello";
v1 = null;
v1 = undefined;
var E1 = new Employee_1.default(101, "Jane", "Doe", "Sales", 60000);
E1.showDetails();
//empID is read only property - cannot be reassigned
// E1.empID = 102
console.log("Emp Id for E1 : ", E1.empID);
//Error - department is private within Employee class
// console.log("Department for E1 : ", E1.department);
// E1.department = "HR"
console.log("Department for E1 : ", E1.getDepartment());
//Error - salary is protected within Employee class
// console.log("Salary for E1 : ", E1.salary);
console.log("\nPartTimeEmployee --------");
var PTEmp1 = new PartTimeEmployee_1.default(102, "John", "Doe", "IT", 40, 35.0);
PTEmp1.showDetails();
