function buttonClick(button) {
    const operator = button.classList.contains("right");
    const value = button.innerText;
    const screen = document.getElementById("screen");
    if (operator) {
        
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