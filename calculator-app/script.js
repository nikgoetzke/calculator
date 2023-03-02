let calcDisplay = document.querySelector(".calc-display");
let initializeDisplay = document.createElement("div");

initializeDisplay.classList.add("display-value");
initializeDisplay.textContent = "0";
calcDisplay.appendChild(initializeDisplay);

initializeDisplay.classList.add("calc-display-result");

let calcBtn = document.querySelectorAll(".calc-btn");

calcBtn.forEach(function displayNum() {
  console.log("click");
});
