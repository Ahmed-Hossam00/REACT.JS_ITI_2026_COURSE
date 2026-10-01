// choosing Questions are answered inside the README file

let counter = 1;
function printSepeator(requirment) {
  console.log(` ${counter} `.padStart(15, "=").padEnd(30, "="));
  console.log("");
  counter++;
}

printSepeator();

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num * 2);
});

printSepeator();

const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
  return num > 20;
});

console.log(result);

printSepeator();

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 28 },
  { name: "Omar", age: 30 },
];

const user = users.find((item) => {
  return item.age > 25;
});

console.log(user);

printSepeator();

const names = ["ali", "mona", "ahmed"];

const Q4result = names.map((name) => {
  return name.toUpperCase();
});

console.log(result);

printSepeator();

const fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruitIndex in fruits) {
  console.log(fruits[fruitIndex]);
}

fruits.forEach((fruit, index) => {
  console.log(`${index} -> ${fruit}`);
});

printSepeator();

let sum = (a, b) => {
  return a + b;
};

printSepeator();

const Part5Q2User = {
  name: "Mostafa",
  age: 25,
};

let { name, age } = Part5Q2User;

printSepeator();

console.log(`Hello ${name}`);

printSepeator();

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

printSepeator();

const students = [
  { name: "Ali", degree: 70 },
  { name: "Sara", degree: 95 },
  { name: "Ahmed", degree: 40 },
  { name: "Mona", degree: 85 },
  { name: "Omar", degree: 55 },
];

const studentNames = students.map((student) => student.name);
const HigherThan60_Stdents = students.filter((student) => student.degree >= 60);
const higherThan_90_Student = students.find((student) => student.degree > 90);

students.forEach((student) => {
  console.log(`Name : ${student.name}`);
});

printSepeator();

const BonusQuestionNumbers = [5, 10, 15, 20];
const BonusQuestionResult = BonusQuestionNumbers.reduce(
  (prevResult, currentVal) => {
    return prevResult + currentVal;
  },
);

console.log(BonusQuestionResult);
