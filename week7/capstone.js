function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add").value;
    var inputValue1 = document.getElementById("add1").value;
    li.textContent = inputValue + " - " + inputValue1;

    if (inputValue === '') {
      document.getElementById("list").appendChild(li);
    }
      document.getElementById("add").value = "";
    

    if (inputValue1 === '') {
        alert("Please write something!");
      } else {
        document.getElementById("list").appendChild(li);
      }
      document.getElementById("add1").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


///////////////////////////////////////////////////




// Create delete button

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// click to delete button

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


