// Javascript program to display grade of a student by percentange.

let nameOfTheStudent = "Khasim";
let marksOfTheStudent = 95;
let grade;

if (marksOfTheStudent > 35) {
	grade = "Below Average";
}
else {
	grade = "Fail";
}
if (marksOfTheStudent > 50) {
	grade = "Average";
}
if (marksOfTheStudent > 70) {
	grade = "Topper";
}
if (marksOfTheStudent > 90) {
	grade = "Topper+++++";
}

console.log(nameOfTheStudent, "is", grade, "Since he got", marksOfTheStudent, "%");
