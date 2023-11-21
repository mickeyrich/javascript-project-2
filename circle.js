import {
  calculateCircumference,
  calculateArea,
  calculateVolume,
} from "./circleCalc.js";

document.querySelector("#submitButton").addEventListener("click", function (e) {
  submitCircumferenceFunction();
  e.preventDefault();
});

document
  .getElementById("submitAreaButton")
  .addEventListener("click", function (e) {
    submitAreaFunction();
    e.preventDefault();
  });

document
  .getElementById("submitVolumeButton")
  .addEventListener("click", function (e) {
    submitVolumeFunction();
    e.preventDefault();
  });

function submitCircumferenceFunction() {
  let radius = circleForm.radiusForCircumference.value;
  document.getElementById("outputCircumference").innerHTML =
    "The circumference is " + calculateCircumference(radius);
}

function submitAreaFunction() {
  let radius = circleForm.radiusForArea.value;
  document.getElementById("outputArea").innerHTML =
    "The Area is " + calculateArea(radius);
}

function submitVolumeFunction() {
  let radius = circleForm.radiusForVolume.value;
  document.getElementById("outputVolume").innerHTML =
    "The Volume is " + calculateVolume(radius);
}
