document.addEventListener("DOMContentLoaded", function () {
    const projectsButton = document.getElementById("projects");
    const aboutMeButton = document.getElementById("aboutMe");
    const creditsButton = document.getElementById("credits");

    const goBackButtons = document.getElementsByClassName("goBackToMenuButton");

    const mainMenu = document.getElementsByClassName("mainMenu")[0];
    const projects = document.getElementsByClassName("projects")[0];
    const aboutMe = document.getElementsByClassName("aboutMeContent")[0];
    const credits = document.getElementsByClassName("credits")[0];

    projectsButton.addEventListener("click", function () {
        mainMenu.style.display = "none";
        projects.style.display = "flex";
    });

    aboutMeButton.addEventListener("click", function () {
        mainMenu.style.display = "none";
        aboutMe.style.display = "flex";
    });

    creditsButton.addEventListener("click", function () {
        mainMenu.style.display = "none";
        credits.style.display = "flex";
    });

    for (let i = 0; i < goBackButtons.length; i++) {
        goBackButtons[i].addEventListener("click", function () {
            mainMenu.style.display = "flex";
            projects.style.display = "none";
            aboutMe.style.display = "none";
            credits.style.display = "none";
        });
    }
});
