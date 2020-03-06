function showNextHideOthers(current, btnClicked, steps) {
  let indexToShow;
  if (btnClicked.classList.contains("prev"))
    indexToShow = current - 1;
  else
    indexToShow = current + 1;

  for (let i = 0; i < steps.length; ++i) {
    if (i === indexToShow) {
      steps[i].style.visibility = "visible";
    } else {
      steps[i].style.visibility = "hidden";
    }
  }
}

function runLoginStepper() {
  steps = document.querySelectorAll("div");
  console.log(steps)
  steps[0].style.visibility = "visible";

  for (let i = 0; i < steps.length; ++i) {
    steps[i].addEventListener("click", function (event) {
      if (event.target.nodeName === "BUTTON")
        showNextHideOthers(i, event.target, steps);
    });
  }
}

runLoginStepper();
