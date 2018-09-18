var current = "";
var previousOperation = null;
var memory = "";

// Add digit to current and memory, display current.
function digitPress(digit){
  current = current + digit;
  memory += digit;
  document.getElementById("display").value = current;
}

// Check if operation is valid. An operation cannot be the first input.
// If the operation is the first one pressed, store it and wait for more input.
// Other wise, evaluate the expression in memory and display it. Store the
// operation that was pressed and wait for more input.

function operationPress(operation){
  if(current != ""){
      if(previousOperation == null){
        previousOperation = operation;
        current = "";
        memory += operation;
      }
      else {
        current = eval(memory);
        document.getElementById("display").value = current;
        checkInput();
        previousOperation = null;
        operationPress(operation);
      }
  }
  else {
      clearCalc("Invalid Input");
  }

}

// Add it up! Evaluate the expression stored in memory to ensure PEMDAS.
function equalsButton() {
  current = eval(memory);
  document.getElementById("display").value = current;
  checkInput();
  previousOperation = null;
}

// Clear all memory.
function clearCalc(displayValue) {
  current = "";
  previousOperation = null;
  memory = "";
  document.getElementById("display").value = displayValue;
}

// Check to see that input is not more than 10 digits, and nobody tried to
// rip a hole in spacetime by dividing by zero.
function checkInput() {
  var limit = 10;
  var check = document.getElementById("display").value ;
  var error = null;

  if(check == Infinity || check == -Infinity){
    error = "Undefined";
  }
  if(check.length > limit){
    error = "Error";
  }

  if (error){
      document.getElementById("display").value = error;
      clearCalc(error);
  }
}
