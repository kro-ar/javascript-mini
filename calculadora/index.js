//display
const display = document.getElementById("display");

//select num/btn
function appendToDisplay(input) {
  display.value += input;
}
//clear calculator
function clearDisplay() {
  display.value = "";
}

//calculator program
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

//eval() allows you to execute a string of code as if it were actual JavaScript code.
// I would recommend using eval() ONLY for learning purposes and not any actual production code.
