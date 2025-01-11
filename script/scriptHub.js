const clickableImage = document.getElementsByClassName('clickable-image');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const submitCodeButton = document.getElementById('submit-code');
const codeInput = document.getElementById('code-input');

// Fonction pour ouvrir la popup
for (let i = 0; i < clickableImage.length; i++) {
    clickableImage[i].addEventListener('click', function() {
        popup.style.display = 'flex';
    });
}

// Fonction pour fermer la popup
closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Fonction pour vérifier le code
submitCodeButton.addEventListener('click', function() {
    const enteredCode = codeInput.value.trim();

    if (enteredCode === '2648') {
        window.location.href = "./chapter1.html";
    } else if (enteredCode === '8462') {
        window.location.href = "./chapter2.html";
    } else if(enteredCode === '973164'){
        window.location.href = "./chapter3.html";
    } else if (enteredCode === 'love'){
        window.location.href = "./chapterFinal.html";
    } else {
        popup.style.backgroundColor = "red";
        setTimeout(function() {
            popup.style.backgroundColor = "transparent";
        }, 200);
    }
});

     