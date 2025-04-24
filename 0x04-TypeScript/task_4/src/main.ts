/// <reference path="../js/subjects/Teacher.ts" />
/// <reference path="../js/subjects/Subject.ts" />
/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/React.ts" />
/// <reference path="../js/subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
  experienceTeachingJava: 0,
};

cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

console.log('Cpp:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
