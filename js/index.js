function manageVisibility(currentStep, btnClicked, allStepsDiv) {
  let indexToShow;
  if (btnClicked.classList.contains("prev"))
    indexToShow = currentStep - 1;
  else
    indexToShow = currentStep + 1;

  allStepsDiv[currentStep].style.visibility = "hidden";
  allStepsDiv[indexToShow].style.visibility = "visible";
}

function runLoginStepper() {
  steps = document.querySelectorAll("div");
  steps[0].style.visibility = "visible";

  for (let i = 0; i < steps.length; ++i) {
    steps[i].addEventListener("click", function (event) {
      if (event.target.nodeName === "BUTTON")
        manageVisibility(i, event.target, steps);
    });
  }
}

runLoginStepper();
