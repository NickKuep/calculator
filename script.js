let currentOperand = "";
let previousOperand = "";
let operator = "";
//grab all button elements

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.className == "number") {
      const numberSelection = btn.textContent;
      numberInput(numberSelection);
    } else if (btn.className == "operator") {
      const operatorSelection = btn.textContent;
      operatorInput(operatorSelection);
      console.log(operatorSelection);
    } else if (btn.className == "clear") {
      clearInput();
    } else if (btn.className == "del") {
      del();
    } else if (btn.className == "equals") {
      equals();
    } else if (btn.className == "plus_negative") {
      plusNegative();
    }
  });
});

//grab the display div
let display = document.querySelector(".display");

//add or remove '-' from the display and currentOperand
function plusNegative() {
  currentOperand = currentOperand * -1;
  display.textContent = `${currentOperand}`;
}

//Display number / numbers on display AND store in memory to used with an operator

function numberInput(numberSelection) {
  display.textContent += `${numberSelection}`;
  num = Math.floor(`${numberSelection}`);
  buildOperand(num);
}

function buildOperand(num) {
  currentOperand += num;
  console.log(currentOperand);
}

function operatorInput(operatorSelection) {
  if (previousOperand == "") {
    previousOperand = currentOperand;
    currentOperand = "";
  }
  if (operatorSelection == "+") {
    operator = "+";
    console.log(operator);
  } else if (operatorSelection == "-") {
    operator = "-";
  } else if (operatorSelection == "x") {
    operator = "x";
  } else if (operatorSelection == "÷") {
    operator = "÷";
  }
}

function clearInput() {
  display.textContent = "";
  currentOperand = "";
  previousOperand = "";
}

function equals() {
  let calcPrevNum = Math.floor(previousOperand);
  let calcCurNum = Math.floor(currentOperand);
  console.log(operator);
  if (operator == "+") {
    sum = calcPrevNum + calcCurNum;
    previousOperand = sum;
  } else if (operator == "-") {
    sum = calcPrevNum - calcCurNum;
    previousOperand = sum;
  } else if (operator == "x") {
    sum = calcPrevNum * calcCurNum;

    previousOperand = sum;
  } else if (operator == "÷") {
    sum = calcPrevNum / calcCurNum;
    previousOperand = sum;
  }
  display.textContent = `${previousOperand}`;
  currentOperand = "";
}
