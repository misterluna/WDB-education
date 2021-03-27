function performMath() {
    // TODO
    console.log("Implement operation!");
}

function buttonClick(button) {
    const operator = button.classList.contains("operator");
    const value = button.innerText;
    const screen = document.getElementById("screen");
    if (operator) {
        switch (value) {
            case "C":
                console.log("Implement operation!");
                // TODO
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
        screen.innerHTML = 10 * currentValue + parseInt(value);
    }
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function (event) {
        buttonClick(event.target);
    });
}

window.addEventListener("load", function () {
    init()
});