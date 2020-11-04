var newE = document.createElement ("h1")
newE.textContent = " Welcome to my JS site "
newE.style.textAlign = "center"
document.body.append(newE)

var newP = document.createElement ("p")
newP.textContent = " All of this was created with Javascript "
newP.style.textAlign = "center"
document.body.append(newP)
newP.style.fontSize = "20px"

var ol = document.createElement("ol");
ol.textContent = "JS List";
ol.style.paddingRight = "40px";
document.body.append(ol);

var newLi = document.createElement ( "li" );
newLi.textContent = "This is ";
var newLi1 = document.createElement ( "li" );
newLi1.textContent = "Awesome";
document.body.style.textAlign = "center";
document.body.style.listStyle = "decimal inside";

ol.append(newLi);
ol.append(newLi1); 