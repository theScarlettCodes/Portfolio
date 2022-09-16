const display = document.querySelector(".display");
const controlButtons = document.querySelector(".controls").children;
const allSymbols = ["+", "-", "X", "/", "%", "C", "="];
const backSpace = document.querySelector("#backspace");

let firstValue = "";
let secondValue = "";
let symbol = "";

const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "X") result = firstValue * secondValue;
  if (symbol === "/") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;

  display.innerText = result;

  firstValue = result;
  secondValue = "";
};

for (let button of controlButtons) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (!secondValue && btnValue === "=") return null;

    if (btnValue === "C") {
      firstValue = secondValue = symbol = "";
      return (display.innerText = "");
    }

    if (btnValue === "") {
      display.innerText = display.innerText.slice(0, -1);
    }

    if (symbol.length > 1 && btnValue == symbol) {
      symbol = btnValue;
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
  });
}

// todo: If the last character in the display is a symbol and the user clicks another symbol replace last character with the new symbol.
