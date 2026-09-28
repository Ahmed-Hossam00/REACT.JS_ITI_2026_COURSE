// Activity 1

// ========================= Code  =============================

// var number = 12;
// if (number == 0) {
//   console.log("Number is Zero.");
// } else {
//   if (number < 0) {
//     console.log("Number is Negative.");
//   } else {
//     console.log("Number is Positive");
//   }
//   var isEven = number % 2 == 0;
//   console.log(`the number is ${isEven ? "even" : "odd"}`);
// }

// =============================================================

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// Task 1
// Rock , Paper , Scissors
// ========================= Code  =============================

// var PlayerOneChoice = "Rock";
// var PlayerTwoChoice = "Scissors";
// if (
//   (PlayerOneChoice != "Rock" &&
//     PlayerOneChoice != "Paper" &&
//     PlayerOneChoice != "Scissors") ||
//   (PlayerTwoChoice != "Rock" &&
//     PlayerTwoChoice != "Paper" &&
//     PlayerTwoChoice != "Scissors")
// )
//   console.log("Invalid choice");
// else if (PlayerOneChoice === PlayerTwoChoice) console.log("Tie !");
// else if (
//   (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
//   (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
//   (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
// ) {
//   console.log("PlayerOne win");
// } else console.log("PlayerTwo win");

// ===========================================================

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// Task 1
//  Code part (1) Declarea variables using all data types
// ===========================================================

var stringVar = "Hello world";
var numberVar = 123;
var secondNumberVar = 123.5;
var boolVar = true;
var undefinedVar = undefined;

// ===========================================================

// // code part (2) Grades Program

// ===========================================================

var score = 85;
var grade;
if (score >= 90 && score <= 100) grade = "Excellent";
else if (score >= 80 && score <= 89) grade = "Good";
else if (score >= 70 && score <= 79) grade = "Average";
else if (score >= 60 && score <= 69) grade = "Pass";
else if (score < 60) grade = "Fail";
else grade = "Invalid Score";

if (grade != "Invalid Score")
  console.log(`your score is ${score} and your grade is ${grade}`);
else console.log(`Invalid Score : ${score}`);

// ===========================================================
