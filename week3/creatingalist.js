var newE = document.createElement ("h1")
newE.textContent = " Hello World "
newE.style.textAlign = "center"
document.body.append(newE)

for (let i = 0; i < 10; i++) {
    const ele = document.createElement ("h1");
    ele.innerHTML = "Hello World";
    ele.style.backgroundColor = "green";
    ele.style.color = "white";
    ele.style.textAlign = "center";
    document.body.appendChild(ele);

}

const names = ["Steve", "Larry", "Joe", "Shirley", "Nate", "Rick", "Emily"];

for (let i = 0; i < names.length; i++) {
    document.body.append(names) + "<br>";
}



