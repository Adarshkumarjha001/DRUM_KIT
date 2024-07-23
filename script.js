var classButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < classButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "A":
      var tom1 = new Audio("sounds_tom-1.mp3");
      tom1.play();
      break;

    case "D":
      var tom2 = new Audio("sounds_tom-2.mp3");
      tom2.play();
      break;

    case "A":
      var tom3 = new Audio('sounds_tom-3.mp3');
      tom3.play();
      break;

    case "R":
      var tom4 = new Audio('sounds_tom-4.mp3');
      tom4.play();
      break;

    case "S":
      var snare = new Audio('sounds_snare.mp3');
      snare.play();
      break;

    case "H":
      var crash = new Audio('sounds_crash.mp3');
      crash.play();
      break;

    case "J":
      var kick = new Audio('sounds_kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}