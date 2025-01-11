const loginBtn = document.getElementById('connexion-btn');

loginBtn.addEventListener('click', function () {
    const id = document.getElementById("identifiant").value;
    const pwd = document.getElementById("mdp").value;
    const stanElement = document.querySelector("stan");

    if (id === "i" && pwd === "jklm") {
        window.location.href = "./hub.html";
    } else {
        stanElement.classList.add("error");
        setTimeout(() => {
            stanElement.classList.remove("error");
        }, 2000);
    }
});

