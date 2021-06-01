
//functions for onclick for form.

function div_show() {
    document.getElementById('form_full').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('form_full').style.display = "none";
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

