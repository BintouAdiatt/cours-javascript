// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Recuperer le contenu du tag h1
// ******************************

//let premierH1 = document.querySelector(selectors `h1`);
//console.log(premierH1.innerText);
ou
//console.log(premierH1.textContentontant);

// Modifier le contenu du tag h1
// *****************************
//premierH1.innerHTML = "<div style =" color : red> titre modifier par javaScript
//document.querySelector(selectors `titrehearder`).textContent = Wikipedia.org;


// Modifier le contenu HTML du tag h1
// **********************************

//TODO

// Exercices
// *********
let liens = document.querySelectorAll(selectors "a");
liens[6].texteContent = "lien 4";
liens[7].texteContent = "lien 5";
liens[8].texteContent = "lien 6";

// Modifier l'attribut d'un element
// ********************************

document.querySelector(selectors "a").href = https//wikipedia.org
document.querySelector(selectors "container").className = "container-fluide";

// Modifier le style d'un element
// ******************************

document.querySelector(selectors "#titreHearder").style.color = teal
document.querySelector(selectors "#titreHearder").style.fontSize "3rem"