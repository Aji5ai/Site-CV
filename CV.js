const menuTexte = document.getElementById("menu_mobile"); //on reprend la liste du menu

/* Fonction pour afficher le menu mobile quand on clique sur MENU et le hamburger, et pour le cacher une fois que l'utilisateur a cliqué sur un des liens */
function toggleMenu() {
if(menuTexte.style.display == "flex") { // si le menu est visible, on le cache
    menuTexte.style.display = "none";
    }
else { // si il est caché, on l'affiche
    menuTexte.style.display = "flex";
}
}