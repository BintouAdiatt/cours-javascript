//NOTION DES OBJECTS EN JS.

let  personne = new Object();
personne.prenom =" Badji";
personne.age = 52:
personne.sexe = "M"


on va préfer cette notation "json"
let personne = {
    prenom: "Badji",
    age: 52,
    exe: "M"
};
console.log(personne);
console.log(personne.age);
console.log(personne["age"]);
console.log(typeof personne);
let personneProps = Object.getOwnPropertyNames(personne);
console.log(personneProps);

//NOTION DE FONCTION EN JS.
let a = 2;
let b= 3;
//je défini une fonction;
function addition() {
 let a = Number(prompt(message "a"));
 let b = Number(prompt(message "b"));
let resultat = a + b;
console.log(resultat);
}
//execution de la fonction
addition()

appel de la fonction
addition();
function addition(m, n) {
    let resultat = m + n;
    return resultat;
}
let autreResultat = addition(-7, 5)* 6
console.log(autreResultat);

//autre facon de definir une fonction (fonction annonime)
let addition2 =funtion(...listeArg){
    let resultat = 0;
    for (const valeur of listeArg){
        resultat
    }
}

