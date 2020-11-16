// Addition

function myFunction (y, z) {
    var x = +y + +z;
    return x;
}

var button = document.getElementById("button");
button.addEventListener("click", function(){
    var addition1 = document.getElementById("addition1").value;
    var addition2 = document.getElementById("addition2").value;
    var answer = document.getElementById("answer");
    var x = myFunction(addition1, addition2);
    answer.textContent = "The Total Is: " + x;
});

// Subtraction

function myFunction2 (y, z) {
    var x = +y - +z;
    return x;
}

var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    var subtraction1 = document.getElementById("subtraction1").value;
    var subtraction2 = document.getElementById("subtraction2").value;
    var answer = document.getElementById("answer");
    var x = myFunction2(subtraction1, subtraction2);
    answer.textContent = "The Total Is: " + x;
});

// Multiplication

function myFunction3 (y, z) {
    var x = +y * +z;
    return x;
}

var button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    var multiplication1 = document.getElementById("multiplication1").value;
    var multiplication2 = document.getElementById("multiplication2").value;
    var answer = document.getElementById("answer");
    var x = myFunction3(multiplication1, multiplication2);
    answer.textContent = "The Total Is: " + x;
})
