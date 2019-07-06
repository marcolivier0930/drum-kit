var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key){

    switch(key){
        case "w":
            var audioTom1 = new Audio('tom-1.mp3');
            audioTom1.play();
            break;
        case "a":
            var audioTom2 = new Audio("tom-2.mp3");
            audioTom2.play();
            break;
        case "s":
            var audioTom3 = new Audio('tom-3.mp3');
            audioTom3.play();
            break;
        case "d":
            var audioTom4 = new Audio('tom-4.mp3');
            audioTom4.play();
            break;
        case "j":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "k":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        default:
            console.log(buttonInnerHTML);
      }
}