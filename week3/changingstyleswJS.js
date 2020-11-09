for (let i = 0; i < 5; i++) {
    const ele = document.createElement ("h2");
    ele.innerHTML = "Hello World";
    ele.style.color = "cornflowerblue";
    ele.style.fontSize = "20px";
    ele.style.fontWeight = "lighter";
    ele.style.fontFamily = "sans-serif";
    ele.style.textAlign = "center";
    ele.classList.add("border");
    document.body.appendChild(ele);

}

