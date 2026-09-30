let students = [
  {
    id: 1,
    name: " Mostafa Mohamed ",
    age: 28,
    city: "Cairo",
    grade: 95,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    name: "Ali Hassan",
    age: 17,
    city: "Alex",
    grade: 60,
    isGraduated: false,
    skills: ["HTML"],
  },
  {
    id: 3,
    name: "Sara Ali",
    age: 24,
    city: "Mansoura",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"],
  },
];

let counter = 1;

function printSepeator(requirment) {
  console.log(` ${counter} `.padStart(15, "=").padEnd(30, "="));
  console.log("");
  counter++;
}

printSepeator(`========= Part 1 =============`);
console.log(students.length);

printSepeator(`========= Part 2 =============`);
console.log(students[0].name);

printSepeator(`========= Part 3 =============`);

console.log(students[students.length - 1].name);

printSepeator(`========= Part 4 =============`);

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

printSepeator(`========= Part 5 =============`);

students.forEach((student) => {
  console.log(`Name : ${student.name}`);
  console.log(`Age : ${student.age}`);
  console.log(`City : ${student.city}`);
  console.log(`Grade : ${student.grade}`);
  console.log("-------------");
});

printSepeator(`========= Part 6 =============`);
students.forEach((student) => {
  if (student.age > 18) console.log(student.name);
});

printSepeator(`========= Part 7 =============`);
students.forEach((student) => {
  if (student.grade > 90) console.log(student.name);
});

printSepeator(`========= Part 8 =============`);
students.forEach((student) => {
  if (student.isGraduated) console.log(student.name);
});

printSepeator(`========= Part 9 =============`);
students.forEach((student) => {
  if (!student.isGraduated) console.log(student.name);
});

printSepeator(`========= Part 10 =============`);
let totalStudentsGrade = 0;
students.forEach((student) => {
  totalStudentsGrade += student.grade;
});
console.log(totalStudentsGrade);

printSepeator(`========= Part 11 =============`);

console.log(totalStudentsGrade / students.length);

printSepeator(`========= Part 12 =============`);

let highestStudent = students[0];

students.forEach((student) => {
  if (highestStudent && highestStudent.grade < student.grade) {
    highestStudent = student;
  }
});

console.log(
  `highest student is ${highestStudent.name} with grade : ${highestStudent.grade}.`,
);

printSepeator(`========= Part 13 =============`);

let lowestStudent = students[0];

students.forEach((student) => {
  if (lowestStudent && lowestStudent.grade > student.grade) {
    lowestStudent = student;
  }
});

console.log(
  `loewst student is ${highestStudent.name} with grade : ${lowestStudent.grade}.`,
);

printSepeator(`========= Part 14 =============`);

let sortedStudents = students.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA.localeCompare(nameB) == 1) return 1;
  if (nameA.localeCompare(nameB) == -1) return -1;

  return 0;
});

console.log(sortedStudents);

printSepeator(`========= Part 15 =============`);

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

printSepeator(`========= Part 16 =============`);

students.forEach((student) => {
  // all the name
  console.log(
    `${student.name.length} - ${student.name[0]} - ${student.name[student.name.length - 1]}`,
  );

  // first name only
  const firstName = student.name.split(" ")[0];
  console.log(
    `${firstName.length} - ${firstName[0]} - ${firstName[firstName.length - 1]}`,
  );
});

printSepeator(`========= Part 17 =============`);

students.forEach((student) => {
  console.log(student.name.toUpperCase());
});

printSepeator(`========= Part 18 =============`);

students.forEach((student) => {
  console.log(student.name.toLowerCase());
});

printSepeator(`========= Part 19 =============`);

students.forEach((student) => {
  console.log(`${student.name} : ${student.name.includes("Ali")}`);
});

printSepeator(`========= Part 20 =============`);

students.forEach((student) => {
  const twoWords = student.name.split(" ");
  console.log(`Two words : ${twoWords[0]} and ${twoWords[1]} `);
});

printSepeator(`========= Part 21 =============`);

students.forEach((student) => {
  const twoWords = student.name.split(" ");
  console.log(`One Word : ${twoWords.join(" ")} `);
});

printSepeator(`========= Part 22 =============`);

students.forEach((student) => {
  console.log(`${student.name.trim()}`);
});

printSepeator(`========= Part 23 =============`);

students.forEach((student) => {
  console.log(`${student.name} : ${student.skills.length} skill`);
});

printSepeator(`========= Part 24 =============`);

students.forEach((student) => {
  console.log(`${student.name} : ${student.skills.join("\n")}`);
});

printSepeator(`========= Part 25 =============`);

students.forEach((student) => {
  student.skills.push("expressJs");
  console.log(`${student.name} : ${student.skills.join("\n")}`);
});

printSepeator(`========= Part 26 =============`);

students.forEach((student) => {
  student.skills.pop();
  console.log(`${student.name} : ${student.skills.join("\n")}`);
});

printSepeator(`========= Part 27 =============`);

students.forEach((student) => {
  console.log(
    `${student.name} ${student.skills.includes("JS") ? "have js skill" : "don't have js skill"}`,
  );
});

printSepeator(`========= Part 28 =============`);

students.forEach((student) => {
  console.log(student.name + "   :");
  for (let i = student.skills.length - 1; i >= 0; i--) {
    console.log(student.skills[i]);
  }
});

printSepeator(`========= Part 29 =============`);

students.forEach((student) => {
  console.log(student.name + "   :");
  let sortedSkills = student.skills.sort();
  console.log(sortedSkills);
});

printSepeator(`========= Part 30 =============`);

students.forEach((student) => {
  let stringSkills = student.skills.join(" ");
  console.log(stringSkills);
});

printSepeator(`========= Part 31 =============`);

Object.keys(students[0]).forEach((key) => {
  console.log(key);
});

printSepeator(`========= Part 32 =============`);

Object.values(students[0]).forEach((key) => {
  console.log(key);
});

printSepeator(`========= Part 33 =============`);

Object.keys(students[0]).forEach((key) => {
  console.log(`${key} : ${students[0][key]}`);
});

printSepeator(`========= Part 34 =============`);

students.forEach((student) => {
  student.country = "Egypt";
  console.log(student.country);
});

printSepeator(`========= Part 35 =============`);

students.forEach((student) => {
  student.country = "USA";
  console.log(student);
});

printSepeator(`========= Part 36 =============`);

students.forEach((student) => {
  delete student["country"];
  console.log(student.country);
});

printSepeator(`========= Part 37 =============`);

students.forEach((student) => {
  if (!student.grade && student.grade != 0) {
    console.log(`${student.name} Don't contain Grade`);
  } else {
    console.log(`${student.name} Contains Grade`);
  }
});

printSepeator(`========= Part 38 =============`);

students.forEach((student) => {
  console.log(`${student.name} : ${isStudentPass(student)}`);
});

printSepeator(`========= Part 39 =============`);

students.forEach((student) => {
  console.log(`${student.name} : ${student.name < 18 ? "Minor" : "Adult"}`);
});

printSepeator(`========= Part 40 =============`);

function getStudentName(student) {
  return student.name;
}

printSepeator(`========= Part 41 =============`);

function getStudentAge(student) {
  return student.age;
}

printSepeator(`========= Part 42 =============`);

function isStudentPass(student) {
  if (student.grade >= 90 && student.grade <= 100) return "Excellent";
  else if (student.grade >= 80) return "Very good";
  else if (student.grade >= 70) return "Good";
  else if (student.grade >= 60) return "Pass";
  else if (student.grade < 60) return "Failed";
  else return "invalid Grade";
}

printSepeator(`========= Part 43 =============`);

function getSkillsCount(student) {
  return student.skills.length();
}

printSepeator(`========= Part 44 =============`);

function getAverageGrades(students) {
  let totalGrades = 0;
  students.forEach((student) => {
    totalGrades += student.grade;
  });
  return totalGrades / students.length;
}

printSepeator(`========= Part 45 =============`);

console.log(Math.random());
console.log(Math.round("5.6"));
console.log(Math.floor(15.5));
console.log(Math.ceil(15.5));
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));
console.log(Math.pow(2, 3));
