const loginBtn = document.getElementById('connexion-btn');
const formulaire = document.getElementById("login")
const close = document.getElementById("close-btn");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener('click', function () {
    const id = document.getElementById("identifiant").value;
    const pwd = document.getElementById("mdp").value;
    const stanElement = document.querySelector("stan");

    if (id === "i" && pwd === "jklm") {
        window.location.href = "./hub.html";
    } else if (id === "maman" && pwd === "prat") {
        window.location.href = "./question.hhtml";
    }else {
        formulaire.style.backgroundColor = "red";
        errorMsg.style.display = "block";
        setTimeout(() => {
            formulaire.style.backgroundColor = "white";
            errorMsg.style.display = "block";
        }, 200);
    }
});

document.getElementById("login-btn").addEventListener("click", function() {

    formulaire.style.display = "block";
});

close.addEventListener("click", function() {
    formulaire.style.display = "none";
});
