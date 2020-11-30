document.querySelector(".goomba2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});

document.querySelector(".bob2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});

document.querySelector(".cheep2").addEventListener("keyup", function(){
    var goombaTotal = Number(document.querySelector(".goomba2").value * 5);
    var bobTotal = Number(document.querySelector(".bob2").value * 7);
    var cheepTotal = Number(document.querySelector(".cheep2").value * 11);
    document.querySelector(".totalprice").innerHTML = goombaTotal + bobTotal + cheepTotal;
});


