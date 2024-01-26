
const button = document.querySelectorAll("button");
const input = document.querySelector("input");
let display_Digit = "";
let isCalculated = false; // Flag to check if a calculation has been performed

button.forEach((event) =>
  event.addEventListener("click", (e) => {
    let equation = e.target.innerText;
    if (isCalculated && equation !== "=" && equation !== "AC" && equation !== "DEL") {
      // If a calculation has been performed and the next button clicked is not "=", "AC", or "DEL"
      // then clear the input
      input.value = "";
      display_Digit = "";
      isCalculated = false; // Reset the flag
    }
    if (equation == "AC") {
      input.value = "";
      display_Digit = "";
    } else if (equation === "DEL") {
      display_Digit = display_Digit.slice(0, -1);
      input.value = display_Digit;
      console.log(display_Digit);
    } else if (equation === "=") {
      display_Digit = eval(display_Digit);
      input.value = display_Digit;
      isCalculated = true; // Set the flag to true after a calculation
    } else {
      calculate(equation);
    }
  })
);

const calculate = (equation) => {
  display_Digit += equation;
  input.value = display_Digit;
};