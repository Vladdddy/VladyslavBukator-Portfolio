function accordion1() {
    const bottom1 = document.getElementById("bottom1");
    const addLine1 = document.getElementById("addLine1");

    if (bottom1.style.display == "flex") {
        bottom1.style.display = "none";
        addLine1.style.opacity = 1;
    } else {
        bottom1.style.display = "flex";
        addLine1.style.opacity = 0;
    }
}

function accordion2() {
    const bottom2 = document.getElementById("bottom2");
    const addLine2 = document.getElementById("addLine2");

    if (bottom2.style.display == "flex") {
        bottom2.style.display = "none";
        addLine2.style.opacity = 1;
    } else {
        bottom2.style.display = "flex";
        addLine2.style.opacity = 0;
    }
}

function accordion3() {
    const bottom3 = document.getElementById("bottom3");
    const addLine3 = document.getElementById("addLine3");

    if (bottom3.style.display == "flex") {
        bottom3.style.display = "none";
        addLine3.style.opacity = 1;
    } else {
        bottom3.style.display = "flex";
        addLine3.style.opacity = 0;
    }
}

function accordion4() {
    const bottom4 = document.getElementById("bottom4");
    const addLine4 = document.getElementById("addLine4");

    if (bottom4.style.display == "flex") {
        bottom4.style.display = "none";
        addLine4.style.opacity = 1;
    } else {
        bottom4.style.display = "flex";
        addLine4.style.opacity = 0;
    }
}

function openMenu() {
    const menu = document.getElementById("menu");
    const menuContent = document.getElementById("menuContent");
    const lineToggle = document.getElementById("lineToggle");
    const lineToggle2 = document.getElementById("lineToggle2");

    if (menuContent.style.opacity == 0) {
        menuContent.style.opacity = 1;
        menuContent.style.zIndex = 1;
        menuContent.style.animation = "menu 0.3s linear";
        menu.style.position = "fixed";
        menu.style.animation = "menu 0.3s linear";
        lineToggle.style.opacity = 0;
        lineToggle2.style.opacity = 0;
        lineToggle.style.animation = "menuIcon 0.3s linear";
        lineToggle2.style.animation = "menuIcon 0.3s linear";
    } else {
        menuContent.style.opacity = 0;
        menuContent.style.zIndex = -1;
        menuContent.style.animation = "none";
        menu.style.position = "static";
        menu.style.animation = "none";
        lineToggle.style.opacity = 1;
        lineToggle2.style.opacity = 1;
        lineToggle.style.animation = "none";
        lineToggle2.style.animation = "none";
    }
}
