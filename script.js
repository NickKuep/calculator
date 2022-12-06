let currentOperand = "";
let previousOperand = "";
let operator = "";
let previousOperator = "";

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

//remove the right most number from current number
function del() {
  currentOperand = Math.floor(currentOperand / 10);
  display.textContent = `${currentOperand}`;
}
//Display number / numbers on display AND store in memory to used with an operator

function numberInput(numberSelection) {
  num = Math.floor(`${numberSelection}`);
  buildOperand(num);
}

function buildOperand(num) {
  currentOperand += num;
  display.textContent = `${currentOperand}`;
}

function operatorInput(operatorSelection) {
  display.textContent = "";
  if (previousOperand == "") {
    previousOperand = currentOperand;
    currentOperand = "";
    previousOperator = operator;
  }
  if (previousOperand && currentOperand != "") {
    equals(previousOperator);
  }
  if (operatorSelection == "+") {
    operator = "+";
  } else if (operatorSelection == "-") {
    operator = "-";
  } else if (operatorSelection == "x") {
    operator = "x";
  } else if (operatorSelection == "÷") {
    operator = "÷";
  }
  //allows for multiple calculations without having to hit the equals button
}

function clearInput() {
  display.textContent = "";
  currentOperand = "";
  previousOperand = "";
}

function equals() {
  let calcPrevNum = Math.floor(previousOperand);
  let calcCurNum = Math.floor(currentOperand);
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
  operator = "";
}
