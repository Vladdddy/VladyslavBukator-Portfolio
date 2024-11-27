function main() {
    /* -------------navbar------------- */
    const menuBtn = document.getElementById("menu");
    const menuText = document.getElementById("menuText");
    const menuContainer = document.getElementById("menuContainer");
    menuContainer.style.display = "none";

    menuBtn.addEventListener("click", () => {
        if (menuContainer.style.display == "none") {
            menuContainer.style.display = "flex";
        } else {
            menuContainer.style.display = "none";
        }
    });

    menuText.addEventListener("click", () => {
        menuContainer.style.display = "none";
    });

    /* -------------dropdown------------- */
    const skillsButtonText1 = document.getElementById("skillsButtonText1");
    const skillsButtonText2 = document.getElementById("skillsButtonText2");
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    const btnDefault = document.getElementById("btnDefault");
    const btnJavascript = document.getElementById("btnJavascript");
    const backendText = document.getElementById("backendText");
    const frontendText = document.getElementById("frontendText");
    const choice = document.getElementById("choice");
    const arrowIconDown = document.getElementById("arrowIconDown");
    const deleteIcon = document.getElementById("deleteIcon");
    const backendContent = document.getElementById("backendContent");
    const frontendContent = document.getElementById("frontendContent");

    dropdown1.addEventListener("click", () => {
        if (skillsButtonText1.textContent.includes("show")) {
            btnDefault.style.display = "none";
            btnJavascript.style.display = "block";
            choice.style.display = "flex";
        } else {
            skillsButtonText1.textContent = "show"
            skillsButtonText2.textContent = "show"
        }

        deleteIcon.style.display = "none";
        arrowIconDown.style.display = "flex";
        backendContent.style.display = "flex";
        frontendContent.style.display = "flex";
        dropdown1.style.backgroundColor = "var(--primary-color)";
    });

    dropdown2.addEventListener("click", () => {
        btnJavascript.style.display = "none";
        btnDefault.style.display = "block";
    });

    backendText.addEventListener("click", () => {
        skillsButtonText1.textContent = "backend";
        skillsButtonText2.textContent = "backend";
        choice.style.display = "none";
        btnJavascript.style.display = "none";
        btnDefault.style.display = "block";
        arrowIconDown.style.display = "none";
        deleteIcon.style.display = "flex";
        backendContent.style.display = "flex";
        frontendContent.style.display = "none";
        dropdown1.style.backgroundColor = "red";
    });

    frontendText.addEventListener("click", () => {
        skillsButtonText1.textContent = "frontend";
        skillsButtonText2.textContent = "frontend";
        choice.style.display = "none";
        btnJavascript.style.display = "none";
        btnDefault.style.display = "block";
        arrowIconDown.style.display = "none";
        deleteIcon.style.display = "flex";
        backendContent.style.display = "none";
        frontendContent.style.display = "flex";
        dropdown1.style.backgroundColor = "var(--primary-color)";
    });

    /* -------------courses------------- */
    const stageButton = document.getElementById("stageButton");
    const courseButton = document.getElementById("courseButton");
    const stageText = document.getElementById("stageText");
    const courseText = document.getElementById("courseText");

    stageButton.addEventListener("click", () => {
        stageText.style.display = "flex";
        courseText.style.display = "none";
        stageButton.classList.add("active");
        courseButton.classList.remove("active");
    });

    courseButton.addEventListener("click", () => {
        stageText.style.display = "none";
        courseText.style.display = "flex";
        stageButton.classList.remove("active");
        courseButton.classList.add("active");
    });
}

main();