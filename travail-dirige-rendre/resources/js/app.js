/* PARTIE 1 ===> DECLARATION DES VARIABLES DU PROGRAMME. */
/* ************************************************************** */

let scoresGlobals = [0, 0];
let scoreEnCours = 0;
let joueurActif = 1;

/* PARTIE 2 ===> INITIALISATION DU GUI DU JEU.
/*  ********************************************************  */
document.getElementById(`score-1`).textContent = `0`;
document.getElementById(`score-2`).textContent = `0`;
document.getElementById(`score-1`).textContent = `0`;
document.getElementById(`score-2`).textContent = `0`;
document.querySelector(`de`).style.display = `none`;

/*  PARTIE  3 ===> GESTION DU CLOCK SUR LE BOUTON LANCEZ LE DE.
/*  *************************************************************
/*  on cible le bouton à l'aide de sa classe   */
let btnlancezLeDe = document.querySelector(`.btn-lancer`);
btnlancezLeDe.addEventListener(`click `,() =>{
    let de = Math.floor(Math.random()*6) + 1;
    let  domDe = document.querySelector(`de`);
    domDe.style.display = `block`;
    domDe.src `resources/images/de-${de}.png` ;
    scoreEnCours += de;
    document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;

});
/* Partie 3 .
*************************************************************
 */
let bntLancezLeDe = document.querySelector(`btn-lancer`);
btnlancezLeDe.addEventListener(`click `,() => {
    let de = Math.floor(Math.random()* 6) + 1;
    let domDe = document.querySelector(`de`);
    domDe.style.display = `block`;
    domDe.src = `resources/images/de-${de}`.png;

    if(de !== 1) {
        scoreEnCours += de;
        document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;
    } else{
        joueurActif === 1? joueurActif = 2: joueurActif = 1;
        scoreEnCours = 0;
        document.getElementById(`encours-${joueurActif}`).textContent =`0`;
    }
    let  btnLancezLeDe = document.querySelector(`.btn-lancer`);
    btnLancezLeDe.addEventListener(`click`,() =>{
        let de = Math.floor(Math.random()* 6) + 1;
        domDe.style.display = `block`;
        domDe.src = `resources/images/de-${de}.png`;
        if (de == 1) {
            scoreEnCours += de;
            document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;

        }else {
            joueurActif === 1?  joueurActif   = 2: joueurActif = 1;
            scoreEnCours = 0;
            document.getElementById(`encours-${joueurActif}`).textContent = 0;
            document.querySelector(`joueur-1-panel`).classList.toggle(`active`);
            document.querySelector(`joueur-2-panel`).classList.toggle(`active`);
            document.querySelector(`de`).style.display = `none`;

        };
        });
});

//PARTIE 4 Gestion du Click.
let bynCommutez = document.querySelector(`.btn-commuter`);
bynCommutez.addEventListener(`click`,() =>{
    scoresGlobals[joueurActif - 1] += scoreEnCours;
});
document.getElementById(`score - ${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];

joueurActif=== 1 ? joueurActif = 2 : joueurActif = 1;
scoreEnCours = 0;
document.getElementById(`encours-${joueurActif}`).textContent = 0;
document.querySelector(`.joueur-1-panel`).classList.toggle(`active`);
document.querySelector(`.joueur-2-panel`).classList.toggle(`active`);
document.querySelector(`de`).style.display = `none`;

function joueursuivant() {
    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;
    document.getElementById(`encours-${joueurActif}`).textContent = 0;
    document.querySelector(`.joueur-1-panel`).classList.toggle(`active`);
    document.querySelector(`.joueur-2-panel`).classList.toggle(`active`);
    document.querySelector(`de`).style.display = `none`;
}
//Partie 3 ===> gestion du click sur le bouton .
let btnLancezDe = document.querySelector(`.btn-lancer`);
btnLancezDe.addEventListener(`click `, () => {
    let de = Math.floor(Math.random()* 6) + 1;
    let domDe = document.querySelector(`de`);
    domDe.style.display = `block`;
    domDe.src = `resources/images/de-${de} .png`;

    if (d !== 1){
      scoreEnCours  += de;
      document.getElementById(`encours-{${joueurActif}`).textContent = scoreEnCours;
    }else {
        joueursuivant();
    };
    //Partie  5 Gestion du click sur le bouton commuter.
    let btnCommutez = document.querySelector(`btn-commuter`);
    btnCommutez.addEventListener(`click `, () => {
        scoresGlobals[joueurActif - 1] += scoreEnCours;
        document.getElementById(`score-${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];
        joueursuivant();
        });

    //Partie 6  => Gestiond du click sur le bouton du nouveau jeu.
    let btnNouveauJeu = document.querySelector(`.btn-nouveau`);
    btnNouveauJeu.addEventListener(`click `, () =>{
        scoresGlobals = [0,0];
        scoreEnCours = 0;
        joueurActif = 0;
        });

    function initiliseLeJeu() {
        scoresGlobals [0, 0];
        scoreEnCours = 0;
        joueurActif = 1;
 document.querySelector(`de`).style.display = `none`;
 document.getElementById(`score-1`).textContent = `0`;
 document.getElementById(`score-2`).textContent = `0`;
 document.getElementById(`score-1`).textContent = `0`;
 document.getElementById(`score-2`).textContent = `0`;


 initiliseLeJeu();

 let btnNouveauJeu = document.querySelector(`.btn-nouveau`);
 btnNouveauJeu.addEventListener(`click`, () =>{
initiliseLeJeu();
     });

 // Partie 4 gestion du click sur le bouton commuter.
  let btnCommutez = document.querySelector(`.btn-commuter`);
  btnCommutez.addEventListener(`click`, () => {scoreEnCours
  scoresGlobals[joueurActif -1] += scoreEnCours;
  document.getElementById(`score-${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];
  if (scoresGlobals[joueurActif - 1] >= 100){
  document.getElementById(`nom-${joueurActif}`).textContent =  `bravo ! ! !`;
  document.querySelector(`de`).style.display = `none`;
  document.querySelector(`.joueur-${joueurActif}-panel`).classList.add(`vainqueur`);
  document.querySelector(`. joueur-${joueurActif}-panel`).classList.remove(`active`);

  }else {
      joueursuivant();
  };
  };
    )};

