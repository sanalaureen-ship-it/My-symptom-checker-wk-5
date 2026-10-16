const title = "Student Exam Card";
console.log(title);

// Names (reassigning with let)
let name = "David Mwangi";
console.log(name);
name = "Milka Wambui";
console.log(name);
name = "Wambua Wambua";
console.log(name);
name = "Lucy Lagat";
console.log(name);
name = "June Kwamboka";
console.log(name);

// Student records
const students = [
  { name: "David Mwangi", score: 74 },
  { name: "Milka Wambui", score: 65 },
  { name: "Wambua Wambua", score: 95 },
  { name: "Lucy Lagat", score: 50 },
  { name: "June Kwamboka", score: 47 },
];

// Pass/fail and grade for each student
for (const student of students) {
  if (student.score >= 50) {
    console.log(student.name + " passed");
  } else {
    console.log(student.name + " failed, retake");
  }

  if (student.score >= 75) {
    console.log(student.name + " A");
  } else if (student.score >= 64) {
    console.log(student.name + " B");
  } else if (student.score >= 54) {
    console.log(student.name + " C");
  } else if (student.score >= 50) {
    console.log(student.name + " D");
  } else {
    console.log(student.name + " F");
  }
}

// Filter passing and failing students
const passingStudents = students.filter((student) => student.score >= 50);
console.log("Passing students:", passingStudents);

const failingStudents = students.filter((student) => student.score < 50);
console.log("Failing students:", failingStudents);