originalFont = null;    // Global variable for original font
fontChanges = [];

function setFont(whichFont) {
    if (originalFont == null) {
        originalFont = document.body.style.fontFamily;
    }
    document.body.style.fontFamily = whichFont;
    fontChanges.push(whichFont);
}

function showChanges() {
    if (fontChanges.length == 0) {
        alert("No changes");
    }
    else {
        s = ''
        for (i = 0; i < fontChanges.length; i++) {
            s = s + fontChanges[i] + '<br>';
        }
        document.getElementById('changeList').innerHTML = s;
    }
}

function revertFont() {
    setFont(originalFont);
}