document.body.style.padding = "400px";
var button = document.createElement("button");
button.innerHTML = "I am a Button of Colors";

// Blue when the mouse hovers over the square

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener ("mouseover", function() {
    document.body.style.backgroundColor = "blue";
} );

// Red when the mouse button is held down over the square

var mouseDown = document.getElementsByTagName ("body")[0];
body.appendChild(button);
button.addEventListener("mousedown", function() {
    document.body.style.backgroundColor = "red";
});

// Yellow when the mouse button is let go over the square

var mouseUp = document.getElementsByTagName ("body")[0];
body.appendChild(button);
button.addEventListener("mouseup", function() {
    document.body.style.backgroundColor = "yellow";
} );

// Green when the mouse is double clicked in the square

var dblClick = document.getElementsByTagName ("body")[0];
body.appendChild(button);
button.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "green";
});

// Orange when the mouse scroll is used somewhere in the window 

window.addEventListener("scroll", event => {
    document.body.style.backgroundColor = "orange";
})

//Keyboard Key Codes

button.addEventListener("keydown", event => {
    if (event.key == "b") {
        document.body.style.backgroundColor = "blue";
    }
})

button.addEventListener("keydown", event => {
    if (event.key == "r") {
        document.body.style.backgroundColor = "red";
    }
})

button.addEventListener("keydown", event => {
    if (event.key == "y") {
        document.body.style.backgroundColor = "yellow";
    }
})

button.addEventListener("keydown", event => {
    if (event.key == "g") {
        document.body.style.backgroundColor = "green";
    }
})

button.addEventListener("keydown", event => {
    if (event.key == "o") {
        document.body.style.backgroundColor = "orange";
    }
})