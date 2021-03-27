let lastOperand;
let currentOperation;
let screen;

function setScreen(value) {
    screen.innerHTML = value;
}

function getScreen() {
    return parseInt(screen.innerText);
}

function resetState(screenValue) {
    lastOperand = undefined;
    currentOperation = undefined;
    setScreen(screenValue);
}

function performMath() {
    switch (currentOperation) {
        case "÷":
            return Math.floor(lastOperand / getScreen());
        case "×":
            return lastOperand * getScreen();
        case "-":
            return lastOperand - getScreen();
        case "+":
            return lastOperand + getScreen();
    }
    return 0;
}

function buttonClick(button) {
    const operator = button.classList.contains("operator");
    const value = button.innerText;
    if (operator) {
        switch (value) {
            case "C":
                resetState(0);
                break;
            case "=":
                let result = performMath();
                resetState(result);
                break;
            case "←":
                let currScreen = getScreen();
                let lastDigit = getScreen() % 10;
                setScreen((currScreen - lastDigit)/10);
                break;
            case "÷":
            case "×":
            case "-":
            case "+":
                lastOperand = getScreen();
                currentOperation = value;
                setScreen(0);
        }
    } else {
        setScreen(10 * getScreen() + parseInt(value));
    }
}

function init() {
    screen = document.getElementById("screen");
    document.querySelector(".calc-buttons").addEventListener("click", function (event) {
        buttonClick(event.target);
    });
}

window.addEventListener("load", function () {
    init()
});