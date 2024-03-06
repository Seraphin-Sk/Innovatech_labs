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


/*=============== EMAIL JS ===============*/

// Récupération des éléments du DOM
const contactForm = document.getElementById('ctt-form'),
      contactMessage = document.getElementById('ctt-message');

// Fonction pour envoyer l'e-mail
const sendEmail = (e) => {
    e.preventDefault(); // Empêche le formulaire de se comporter normalement (rechargement de la page)

    // Envoi du formulaire à Email.js avec les identifiants nécessaires
    // serviceID - template ID - #form - publickey
    emailjs.sendForm('service_xzjmrl6', 'template_netqahv', '#ctt-form', '3LRncYPyE6Pmuw93V')
        .then(() => {
            // Affiche le message de succès
            contactMessage.textContent = 'Message envoyé avec succès ✅'

            // Supprime le message après cinq secondes
            setTimeout(() => {
                 contactMessage.textContent = ''
             }, 5000);

            // Réinitialise les champs du formulaire
              contactForm.reset();
        }, () => {
            // Affiche le message d'erreur en cas d'échec de l'envoi
            contactMessage.textContent = 'Message non envoyé (erreur de service) ❌'
        });
};

// Ajoute un écouteur d'événement au formulaire pour déclencher la fonction sendEmail lors de la soumission
contactForm.addEventListener('submit', sendEmail);


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


/*=============== TESTIMONIAL ===============*/
// Initialisation de l'index à 0
let index = 0;

// Appel de la fonction show avec l'index actuel
show(index);

// Définition de la fonction show qui prend un paramètre i (pour incrémenter ou décrémenter l'index)
function show(i) {
  // Mise à jour de l'index en fonction du paramètre
  index += i;

  // Récupération de tous les éléments avec la classe "client"
  var testim = document.getElementsByClassName("client");

  // Masquage de tous les éléments avec la classe "client"
  for (i = 0; i < testim.length; i++) {
    testim[i].style.display = "none";
  }

  // Vérification si l'index est supérieur à la longueur des éléments - 1
  if (index > testim.length - 1) {
    // Réinitialisation de l'index à 0 si on atteint la fin de la liste d'éléments
    index = 0;
  }

  // Vérification si l'index est inférieur à 0
  if (index < 0) {
    // Réinitialisation de l'index à la fin de la liste d'éléments si on atteint le début
    index = testim.length - 1;
  }

  // Affichage de l'élément actuel en utilisant l'index mis à jour
  testim[index].style.display = "block";
}


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
  }
  
  window.addEventListener('scroll', scrollUp)
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/ 
  // Crée une nouvelle instance de ScrollReveal avec certaines options
  const sr = ScrollReveal({
    origin: 'top', // L'animation commence en haut
    distance: '60px', // L'élément se déplace de 60px pendant l'animation
    duration: 2500, // Durée de l'animation en millisecondes (2,5 secondes)
    delay: 400, // Délai avant le début de l'animation en millisecondes (0,4 secondes)
    // reset: true // Réinitialise l'animation à chaque fois qu'elle devient visible
  })
  
  // Applique l'animation à tous les éléments avec la classe 'home__data'
  sr.reveal(`.hm__data, .hm, .ctt__container, .faq__section, .footer__container`)
  sr.reveal(`.hm__image` , {origin: 'bottom'})
  sr.reveal(`.ctt__description`, {origin: 'right'})
  sr.reveal(`.team__description, .testimnial`, {origin: 'left'})
  sr.reveal(`.team__description`, {origin: 'right'})
  