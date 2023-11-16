import { calculateCircumference } from "./circleCalc.js";

document.querySelector("#submitButton").addEventListener("click", function (e) {
  submitFunction();
  e.preventDefault();
});

function submitFunction() {
  let radius = circleForm.radius.value;
  document.getElementById("output").innerHTML =
    "The circumference is" + calculateCircumference(radius);
}
