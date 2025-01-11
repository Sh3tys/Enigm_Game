const loginBtn = document.getElementById('connexion-btn');

loginBtn.addEventListener('click', function () {
    const id = document.getElementById("identifiant").value;
    const pwd = document.getElementById("mdp").value;
    const stanElement = document.querySelector("stan");

    if (id === "titouan" && pwd === "code") {
        window.location.href = "../Hub/principal.html";
    } else {
        stanElement.classList.add("error");
        setTimeout(() => {
            stanElement.classList.remove("error");
        }, 2000);
    }
});

