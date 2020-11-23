var submit = document.getElementById("submit");
var name = document.getElementById("name");
var email = document.getElementById("email");
var num = document.getElementById("num");


submit.addEventListener("click", function(){
    alert("Name: " + name.value + "\nEmail: " + email.value + "\nPhone Number: " + num.value);
});

