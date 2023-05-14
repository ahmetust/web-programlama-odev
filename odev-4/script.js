function add() {
	var firstNumber = parseInt(document.getElementById("ilk").value);
	var secondNumber = parseInt(document.getElementById("ikinci").value);
	var result = firstNumber + secondNumber;
	document.getElementById("result").innerHTML = result;
}

function subtract() {
	var firstNumber = parseInt(document.getElementById("ilk").value);
	var secondNumber = parseInt(document.getElementById("ikinci").value);
	var result = firstNumber - secondNumber;
	document.getElementById("result").innerHTML = result;
}

function multiply() {
	var firstNumber = parseInt(document.getElementById("ilk").value);
	var secondNumber = parseInt(document.getElementById("ikinci").value);
	var result = firstNumber * secondNumber;
	document.getElementById("result").innerHTML = result;
}

function divide() {
	var firstNumber = parseInt(document.getElementById("ilk").value);
	var secondNumber = parseInt(document.getElementById("ikinci").value);
	var result = firstNumber / secondNumber;
	document.getElementById("result").innerHTML = result;
}