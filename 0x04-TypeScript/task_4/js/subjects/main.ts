/// <reference path="React.ts" />

const cpp: Subjects.Cpp = new Subjects.Cpp();
cpp.getAvailableTeacher();
cpp.setTeacher = { firstName: 'Guillaume', lastName: 'aoudair', experienceTeachingC: 10 };
console.log(cpp.getAvailableTeacher());

const react: Subjects.React = new Subjects.React();
react.getAvailableTeacher();
react.setTeacher = { firstName: 'Guillaume', lastName: 'aoudair', experienceTeachingReact: 10 };
console.log(react.getAvailableTeacher());

const java: Subjects.Java = new Subjects.Java();
java.getAvailableTeacher();
java.setTeacher = { firstName: 'Guillaume', lastName: 'aoudair', experienceTeachingJava: 10 };
console.log(java.getAvailableTeacher());