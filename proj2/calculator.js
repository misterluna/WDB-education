let lastOperand;
let currentOperation;
let screen;

function setScreen(value) {
    screen.innerHTML = value;
}

function performMath() {
    // TODO
    console.log("Implement operation!");
}

function buttonClick(button) {
    const operator = button.classList.contains("operator");
    const value = button.innerText;
    if (operator) {
        switch (value) {
            case "C":
                lastOperand = undefined;
                currentOperation = undefined;
                setScreen(0);
                break;
            case "=":
                console.log("Implement operation!");
                // TODO
                break;
            case "←":
                console.log("Implement operation!");
                // TODO
                break;
            default:
                performMath(value);
        }
    } else {
        let currentValue = parseInt(screen.innerText);
        setScreen(10 * currentValue + parseInt(value));
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