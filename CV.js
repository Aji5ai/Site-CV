// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader"); // On récupère le header par son id défini dans le html

// Get the offset position of the navbar
var sticky = header.offsetTop; // on stocke dans la variable sticky la position supérieure en pixels du header par rapport à son parent

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) { //window.pageYOffset c'est le nombre de pixels qui ont été scrollé dans le document sur l'axe vertical. Donc si on a dépassé le haut de la page par un scroll (comparé à sticky), on ajoute la classe sticky au header
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky"); // Si on est tout en haut de la page on enlève la classe sticky
  }
} 