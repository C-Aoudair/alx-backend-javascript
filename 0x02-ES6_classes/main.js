import listOfStudents from "./9-hoisting.js";
import { HolbertonClass, StudentHolberton } from "./9-hoisting.js";

console.log(listOfStudents);
console.log((listOfStudents[0] instanceof StudentHolberton));
console.log(listOfStudents[0].holbertonClass instanceof HolbertonClass);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)