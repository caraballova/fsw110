var nav = document.createElement ("nav");
document.body.append(nav)

var menu = document.createElement ("a");
menu.href = "#";
menu.textContent = "Menu"
nav.append(menu);

var about = document.createElement ("a");
about.href = "#";
about.textContent = "About";
about.style.padding = " 0px 30px ";
nav.append(about);

var contact = document.createElement ("a");
contact.href = "#";
contact.textContent = "Contact";
nav.append(contact);

var newE = document.createElement ("h1");
newE.textContent = " JavaScript ";
/* newE.style.textAlign = "center"; */
document.body.append(newE);

var newP = document.createElement ("p");
newP.textContent = " Challenge  ";
/* newP.style.textAlign = "center"; */
newP.style.fontSize = "20px";
document.body.append(newP);

var ol = document.createElement("ol");
ol.textContent = "JS List";
ol.style.paddingRight = "40px";
document.body.append(ol);

var newLi = document.createElement ( "li" );
newLi.textContent = "I like JS";
var newLi1 = document.createElement ( "li" );
newLi1.textContent = "Hard at First but Becomes Easier";
/* document.body.style.textAlign = "center"; */
document.body.style.listStyle = "decimal inside";

ol.append(newLi);
ol.append(newLi1); 

var footer = document.createElement ("footer");
footer.textContent = "This is My Foot";
document.body.append(footer);

document.body.style.textAlign = "center";

