const menuTexte = document.getElementById("menu_mobile"); //on reprend la liste du menu

function toggleMenu() {
if(menuTexte.style.display == "flex") { // si le menu est visible, on le cache
    menuTexte.style.display = "none";
    }
else { // si il est caché, on l'affiche
    menuTexte.style.display = "flex";
}
}
