var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var flight = document.getElementById("flight");
var europe = document.getElementById("europe");
var spain = document.getElementById("spain");
var pr = document.getElementById("pr");
var ecuador = document.getElementById("ecuador");
var vegan = document.getElementById("vegan");
var pNut = document.getElementById("pnut");
var gFree = document.getElementById("gfree");
var submit = document.getElementById("submit");

// Checking Diet Restrictions

function ifDiet(){
    if (vegan.checked && pnut.checked && gFree.checked){
        return "Vegan, Peanut Allergy & Gluten Free";
    } else if (vegan.checked && pNut.checked == true){
        return "Vegan & Peanut Allergy";
    } else if (vegan.checked && gFree.checked == true){
        return "Vegan & Gluten Free";
    } else if (pNut.checked && gFree.checked == true){
        return "Peanut Allergy & Gluten Free";
    } else if (vegan.checked == true){
        return "Vegan";
    } else if (pNut.checked == true){
        return "Peanut Allergy";
    } else if (gFree.checked == true){
        return "Gluten Free"
    } else {
        return "No Restrictions"
    }
};

// Checking Gender

function genderCheck(){
    if (male.checked == true){
        return "Male";
    } else if (female.checked == true){
        return "Female";
    }
};

// Checking Location

function locationCheck(){
    if (europe.selected == true){
        return "Europe";
    } else if (spain.selected == true){
        return "Spain";
    } else if (pr.selected == true){
        return "Puerto Rico";
    } else if (ecuador.selected == true){
        return "Ecuador";
    }
};

submit.addEventListener("click", function(){
    alert("Congratulations on your trip. Have a safe flight!" +  "\nFirst Name: " + fName.value + "\nLast Name: " + lName.value + "\nAge: " + age.value + "\nGender: " + genderCheck() + "\nLocation: " + locationCheck() + "\nDiet Restricions: " + ifDiet());
});