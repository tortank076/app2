var background = document.getElementById("background");
var close = document.getElementById("close");
var download = document.getElementById("download");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2")
var app1Btn = document.getElementById("app1Btn");
var app1Btndesck = document.getElementById("app1Btndesck");
console.dir(background);
// background.style.display = "block";

// Fonction de fermeture de la modale
function closeModal() { 
  // Réinitialise les variables
  background.style.display = "none";
}

// Fonction de déploiement de la modale
function openModal() {  
  // Réinitialise les variables
  background.style.display = "block";
}

download.addEventListener("click",openModal);
button1.addEventListener("click",openModal);
button2.addEventListener("click",openModal);
app1Btn.addEventListener("click",openModal);
app1Btndesck.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
