document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let prevInput = "";
    let result = "";

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    function clear() {
        currentInput = "";
        currentOperator = "";
        prevInput = "";
        result = "";
        updateDisplay();
    }

    function handleNumberClick(number) {
        if (currentInput === "0" || currentInput === result) {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    function handleOperatorClick(operator) {
        if (currentInput !== "") {
            prevInput = currentInput;
            currentInput = "";
            currentOperator = operator;
        }
    }

    function handleEqualsClick() {
        if (currentInput !== "" && prevInput !== "") {
            const num1 = parseFloat(prevInput);
            const num2 = parseFloat(currentInput);
            switch (currentOperator) {
                case "+":
                    result = (num1 + num2).toString();
                    break;
                case "-":
                    result = (num1 - num2).toString();
                    break;
                case "*":
                    result = (num1 * num2).toString();
                    break;
                case "/":
                    result = (num1 / num2).toString();
                    break;
            }
            currentInput = result;
            prevInput = "";
            currentOperator = "";
            updateDisplay();
        }
    }

    function handleBackspaceClick() {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    }

    function handleDecimalClick() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay();
        }
    }

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonText = this.textContent;
        if (buttonText >= "0" && buttonText <= "9") {
            handleNumberClick(buttonText);
        } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
            handleOperatorClick(buttonText);
        } else if (buttonText === "C") {
            clear();
        } else if (buttonText === "=") {
            handleEqualsClick();
        } else if (buttonText === "←") { 
            handleBackspaceClick();
        } else if (buttonText === ".") {
            handleDecimalClick();
        }
    });
});

});
