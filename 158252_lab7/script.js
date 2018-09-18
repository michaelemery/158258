counter = 0;
myArray=[];

function popup(x) {
    alert(x);
}

function display(x) {
    if (x == "fred") {
        alert(x);
        counter++;
        document.getElementById('counter').innerHTML=counter;
    }
}

function writeNumbers(upperLimit) {
    u = parseInt(upperLimit);
    if (isNaN(u)) {
        alert("Not a valid number: " + upperLimit);
    } else {
        v="";
        for (i=1; i<=u; i++) {
            v += " " + i;
        }
        document.getElementById("output").innerHTML = v;
    }
}

