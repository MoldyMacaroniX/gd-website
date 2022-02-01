/*************************************/
// Mobile Menu
/*************************************/

var menu = document.getElementById("menu");
var menuBg = document.getElementById("menu-bg");

function openMobile() {
    document.body.style.overflow = "hidden";
    menu.style.display = "flex";
    menuBg.style.display = "block";
    setTimeout(function(){
        menu.style.transform = "translateX(0%)";
        menuBg.style.opacity = "1";
    }, 10);
}

function closeMobile() {
    document.body.style.overflow = "unset";
    menu.style.transform = "translateX(-110%)";
    menuBg.style.opacity = "0";
    setTimeout(function(){
        menu.style.display = "none";
        menuBg.style.display = "none";
    }, 250);
}

/*************************************/
// Copy text to clipboard
/*************************************/

// https://stackoverflow.com/a/48542290
function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}