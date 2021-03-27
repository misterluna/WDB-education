function buttonClick(button) { 
    console.log(button);
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function (event) {
        buttonClick(event.target);
    });
}

window.addEventListener("load", function () {
    init()
});