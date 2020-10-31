var newE = document.createElement ("h1")
newE.textContent = " Welcome to my JS site "
newE.style.textAlign = "center"
document.body.append(newE)

var newP = document.createElement ("p")
newP.textContent = " All of this was created with Javascript "
newP.style.textAlign = "center"
document.body.append(newP)
newP.style.fontSize = "10px"

var newLi = document.createElement ( "li" )
newLi.textContent = "This"
var myList = document.getElementById ( "list" )
myList.prepend ( newLi )
document.body.style.textAlign = "center"
document.body.style.listStyle = "decimal inside";