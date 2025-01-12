const audio = document.getElementById("myAudio");
const button = document.getElementById("audioControl");
const buttonImage = document.getElementById("buttonImage");

audio.volume = 0.2

button.addEventListener("click", () => {
 
  if (audio.paused) {
    audio.play();
    buttonImage.src = "./picture/song on.png"; 
  } 

  else {
    audio.pause();
    buttonImage.src = "./picture/song off.png";
  }
});