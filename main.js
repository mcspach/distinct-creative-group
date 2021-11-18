//functions onload for navbar.
let topBar = '';
topBar += '<a href="./index.html" name="Home"><img src="images/distinct-creative_logo_black.png" alt="distinct creative group logo"></a>';
topBar += '<div><a href="./inquire.html" name="Inquire"><button><h3 class="button_text">GET A QUOTE</h3></button></a>';
topBar += '<button id="nav_button" onclick="nav_show()"><h3 class="button_text"><i class="fas fa-angle-down" id="chevron"></i></h3></button></div>';

let navBar = '';
navBar += '<nav><a href="https://distinct-branding-academy.teachable.com" target="_blank"><button class="dark"><h3 class="button_text">BRANDING ACADEMY</h3></button></a>';
navBar += '<a href="./recording-studio.html"><button class="dark"><h3 class="button_text">RECORDING STUDIO</h3></button></a>';
navBar += '<a href="https://www.instagram.com/nickjohnson_official/" target="_blank"><button class="dark"><h3 class="button_text">INSTAGRAM</h3></button></a></nav>';

window.addEventListener('load', addNavBars, false);
function addNavBars() {
    document.querySelector('.top_bar').innerHTML = topBar;
    document.getElementById('main_nav').innerHTML = navBar;
}


//functions for onclick for form.

function nav_show() {
if (document.getElementById('main_nav').style.display === "block") {
    document.getElementById('main_nav').style.display = "none";
    document.getElementById('chevron').style.transform = "rotateX(0deg)";
} else {
    document.getElementById('main_nav').style.display = "block";
    document.getElementById('chevron').style.transform = "rotate(180deg)"; 
};
}


//animation for titles


var titles = document.querySelectorAll(".stretch");
fraction = .8;
function checkScrollTitle() {

for(var i = 0; i < titles.length; i++) {

var title = titles[i];

var x = title.offsetLeft, y = title.offsetTop, w = title.offsetWidth, h = title.offsetHeight, r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        title.classList.add("stretching");
    }
}
}

window.addEventListener('scroll', checkScrollTitle, false);
window.addEventListener('resize', checkScrollTitle, false);

// animation for shadows on cards

var cards = document.querySelectorAll(".slide_up");
fraction = .2;
function checkScrollCard() {

for(var i = 0; i < cards.length; i++) {

var card = cards[i];

var x = card.offsetLeft, y = card.offsetTop, w = card.offsetWidth, h = card.offsetHeight, r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        card.classList.add("sliding");
    }
}
}

window.addEventListener('scroll', checkScrollCard, false);
window.addEventListener('resize', checkScrollCard, false);

// animation for icons

var icons = document.querySelectorAll(".reveal");
fraction = .3;
function checkScrollIcon() {

for(var i = 0; i < icons.length; i++) {

var icon = icons[i];

var x = icon.offsetLeft, y = icon.offsetTop, w = icon.offsetWidth, h = icon.offsetHeight, r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        icon.classList.add("revealed");
    }
}
}

window.addEventListener('scroll', checkScrollIcon, false);
window.addEventListener('resize', checkScrollIcon, false);

