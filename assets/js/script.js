/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
};


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
};
window.addEventListener('scroll', blurHeader)



/*=============== COMPTER ===============*/

let number = 350; // Nombre final du compteur
let compter = 0; // Initialisation du compteur
let duration = 1; // Durée en seconde pendant laquel le compteur ira de 0 à 350
let delta = Math.ceil((duration * 1000) / number); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
let node =  document.getElementById("choosus__number"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++compter + " + " ;
  if( compter < number ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);


/*=============== FAQ ===============*/
// Sélectionne tous les éléments HTML avec la classe "faq-toggle" 
const toggles = document.querySelectorAll(".faq-toggle")

// Pour chaque élément "toggle" dans la liste de toggles
toggles.forEach(toggle => {
  // Ajoute un écouteur d'événements de clic à chaque "toggle"
  toggle.addEventListener('click', () => {
    // Lorsque l'élément est cliqué, il ajoute ou supprime la classe "active" à son parent
    toggle.parentNode.classList.toggle("active")
  })
})

