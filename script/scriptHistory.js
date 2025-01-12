
document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("main p");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    paragraphs.forEach(paragraph => observer.observe(paragraph));
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn-start");
    const span = document.getElementById("code-span");

    button.addEventListener("click", () => {
        
        button.style.opacity = "0";
        button.style.transform = "translateY(-20px)";

        setTimeout(() => {
            button.style.display = "none";
            span.style.display = "block";
            span.style.opacity = "1";
        }, 500);
    });
});

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