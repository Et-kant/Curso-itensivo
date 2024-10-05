let button = document.getElementById("main_btn");
let textMayuscula = document.getElementById("texto");
button.addEventListener("click" , function(){
    let currenttitel = textMayuscula.textContent;
    textMayuscula.textContent = currenttitel.toUpperCase();
})

// let main_div = document.querySelector(".main_div");


