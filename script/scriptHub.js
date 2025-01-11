// Sélection des éléments HTML
const clickableImages = document.querySelectorAll('.clickable-image');
const popups = document.querySelectorAll('.popup');
const closePopupButtons = document.querySelectorAll('.close-popup');
const submitCodeButtons = document.querySelectorAll('.submit-code');
const codeInputs = document.querySelectorAll('[id^="code-input"]');

// Fonction pour ouvrir la popup
clickableImages.forEach((image) => {
    image.addEventListener('click', function() {
        const popupId = image.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'flex';
    });
});

// Fonction pour fermer la popup
closePopupButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const popupId = button.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'none';
    });
});

// Fonction pour vérifier le code
submitCodeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const popupId = button.getAttribute('data-popup');
        const codeInput = document.getElementById(`code-input${popupId.charAt(popupId.length - 1)}`);
        const enteredCode = codeInput.value.trim();

        if (enteredCode === '2648') {
            window.location.href = `./chapter${popupId.charAt(popupId.length - 1)}.html`;
        } else {
            const popup = document.getElementById(popupId);
            popup.style.backgroundColor = "red";
            setTimeout(function() {
                popup.style.backgroundColor = "transparent";
            }, 200);
        }
    });
});
