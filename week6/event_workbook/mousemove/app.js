var x = document.getElementsByClassName("red-box");
var a = document.createElement("h3");
document.body.append(a)
x[0].addEventListener("mousemove", function myFunction(e) {    
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Corrdinates: (" + x + "," + y + ")";
    a.textContent = coor;  
});

x[0].addEventListener("mouseout", function(e){
    a.textContent = "";
});