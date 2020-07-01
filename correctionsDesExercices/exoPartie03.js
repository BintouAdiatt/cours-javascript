//exercice Partie03.
//1 créer une chaîne de caractère de 50

let maChaine = ","
for (let i = 0; i < 50; i++){
    maChaine += ""
}
console.log(`maChaine = ${maChaîne}`);
/*
 inverser une chaine de caractère.
let maChaine = "ordinateur portable";
let maChaine = "portable ordinateur"

3 remplacer toutes la chaîne par uen .
let maChaine = "bic, stylot, sac";
let maChaine ="bic stylot sac";

4 remplcer toutes les occurences d'une lette par une autre dans une chaîne.
let maChaine = "Portable";
let result = maChaine.replace("O", "a");

5 supprimer les occurences dans une chaine de caractère.
let maChaine = "Badji";
let result = maChaîne.shift("d");



Afficher la presence d'une lettre dans une chaîne de caractère.
let maChaine= "Sport balon joueur";
let lettre = "o";
let compteur =0;
for (let i = 0 ; i < maChaine.length-1; i++){
    if (maChaine.charAt(i)===lettre){
        compteur++;
    }
}
alert(`la lettre ${lettre} apparaît ${compteur} fois`);
 