
const resultEtape1 = document.getElementById('resultStep1');
const resultEtape2 = document.getElementById('resultStep2');
const resultEtape3 = document.getElementById('resultStep3');
const resultEtape4 = document.getElementById('resultStep4');
const resultEtape5 = document.getElementById('resultStep5');

const etape2 = document.getElementById('etape2');
const etape3 = document.getElementById('etape3');
const etape4 = document.getElementById('etape4');
const etape5 = document.getElementById('etape5');
const end = document.getElementById('end');
const Finchallenge = document.getElementById('end-challenge');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btnTpChap2 = document.getElementById('tp-chap2');

const buttonIds = ["btnPad1", "btnPad2", "btnPad3", "btnPad4", "btnPad5", "btnPad6", "btnPad7", "btnPad8", "btnPad9", "btnPad0"];


btn1.addEventListener('click',function(){
    if (resultEtape1.value === '16') {
        etape2.style.display = 'block';
        resultEtape1.readOnly = true; // retire la modification possible
        btn1.style.display = 'none';
    } else {
        resultEtape1.value = '';
    }
});

btn2.addEventListener('click',function() {
    if (resultEtape2.value === '26 21_36 17 25 29 21' || resultEtape2.value === 'admin') {
        etape3.style.display = 'block';
        resultEtape2.readOnly = true; // retire la modification possible
        btn2.style.display = 'none';
    } else {
        resultEtape2.value = '';
    }
});

btn3.addEventListener('click',function() {
    if (resultEtape3.value === 'amour') {
        etape4.style.display = 'block';
        resultEtape3.readOnly = true; // retire la modification possible
        btn3.style.display = 'none';
    } else {
        resultEtape3.value = '';
    }
});


// Ajoutez un événement pour chaque bouton numérique
buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", () => {
            resultEtape4.value += button.textContent;
        });
    }
});


btn4.addEventListener('click',function() {
    if (resultEtape4.value === '3141') {
        etape5.style.display = 'block';
        resultEtape4.readOnly = true; // retire la modification possible
        btn4.style.display = 'none';
    } else {
        resultEtape4.value = '';
    }
});

btn5.addEventListener('click',function() {
    if (resultEtape5.value === 'je taime') {
        end.style.display = 'block';
        Finchallenge.style.display = 'block';
        resultEtape5.readOnly = true; // retire la modification possible
        btn5.style.display = 'none';
    } else {
        resultEtape5.value = '';
    }
});

btnTpChap2.addEventListener('click', function() {
    window.location.href = "./chapter2.html";
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