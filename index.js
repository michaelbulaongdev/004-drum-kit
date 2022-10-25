//listening section

//listening for click events
var queryButton = document.querySelectorAll("button.drum");
for (var i = 0; i < queryButton.length; i++) {
    queryButton[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//listening for keyboard events
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


//actions section

//to play the corresponding sound
function makeSound(x) {
    switch (x) {

        case "a":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
        break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "d":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "h":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        default:
            console.log(x + " not assigned");
    }
}

//to highlight the box that was pressed or clicked
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    },  100)
}
