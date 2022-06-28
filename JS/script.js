document.querySelector(".burger").addEventListener("click", descend);
document.querySelector(".fermer").addEventListener("click", descend);

function descend(){
    document.querySelector(".menu").classList.toggle("x");
    document.body.classList.toggle("noscroll");
    console.log("Okay ! Okay !");
}

