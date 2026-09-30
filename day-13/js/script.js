const formContainer = document.querySelector("#formContainer");
const nameField = document.getElementsByName("userName")[0];
const age = document.getElementsByName("age")[0];
const job = document.getElementsByName("job")[0];
formContainer.addEventListener("submit", (e) => {
  // preventing browser from restart
  e.preventDefault();

  const nameFieldValue = nameField.value;
  const ageFieldValue = age.value;
  const jobFieldValue = job.value;
  if (nameFieldValue == "" || ageFieldValue == "" || jobFieldValue == "") {
    window.alert("Please fill all fields");
    return;
  }
  console.log(`Name : ${nameFieldValue}`);
  console.log(`Age : ${ageFieldValue}`);
  console.log(`Job : ${jobFieldValue}`);
  if (ageFieldValue < 18) {
    window.alert("You Are Under age.");
  } else {
    window.alert("Registration Completed.");
  }
});
