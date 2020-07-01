// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// retrait  d'un nouvel element HTML
// ****************************
let titre_h1 = document .getElementById(element `grosTitre`);
let parent = document.body;
parent;removeChild(titre_h1);

Creer un nouvel element HTML
let newTitre document.createElement()
newTitre.id "titreMoyen";
newTitre.texteContent ="Expert en DOM";
newTitre.style;color = "orange";

parent.replaceChild(newTitre,titre_h1);
console.log()

let tousLesp = document.querySelectorALL(selector "p");
console.log(tousLesp);

let p2 = tousLesp[1].firstChild;
console.log(p2.firstChild);
