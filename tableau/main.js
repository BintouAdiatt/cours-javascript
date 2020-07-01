

//LES TABLEAUX

//DECLARATION
let stagiaires = [`Rosana`, `Talia`, `Sabrine`, `Bacarye`, `souly`, `Aoukas`, `toulapi`,`Badji`];
let numero = array[];
let taMixed = new array ();
//sont tous des tableaux .

//taille deu tableau ---> length;
let taille = stagiaires.length;
console.log(`tailleStagiaire = ${taille}`);
console.log(`tailleNumero = ${numero . length}`);
console.log(`tailleTabMixed = ${taMixed}`);

//accés  aux éléments du tableau
console.log(stagiaires[0]);
console.log(stagiaires[2] );
console.log(stagiaires [7]);

//modifier les éléments du tableau

stagiaires[8] = "Tayachi";


let numero = [1 , 2 , 3 ,4];
console.log(numero);

//Ajouter un élément du tableau



//suprimer un élément du tableau
numero.pop();
console.log(numero);

//Ajouter en debut de tableau
numero.unshift(-5):
console.log(numero)

//suprimer le premier élément du tableau.
numero.shift();
numero.shift();
console.log(numero);

//LES BOUCLES.
//pour-->For
for (let i = 1 ;  i <= 20;  ++) {
    console.log(i);
}
exemple
for (let i = 1; i<= 10; i ++) {
    console.log(i);
}

//Tant que ---> while

let i = 1;
console.log(WHILE)
while(i <= 10) {
    console.log(compteur);
    i++
}

//REPETER TANT QUE---> DO...WHILE
let compteur = 1;

do{
    console.log(compteur);
    compteur++;

} whil([compteur <= 10);

exemple
let stagiaires =[`Rosana`, `Talia`, `Sabrine`, `Bacarye`, `souly`, `Aoukas`, `toulapi`,`Badji`];
for (let i = 0; i < stagiaires.length; i++) {
    console.log(stagiaires[i]);
}
ou
let compteur  = 0;
while(compteur<stagiaires.length) {
    console.log(stagiaires[compteur]);
    compteur++;
}

//FOR...OF--->Pour acceder aux éléments du tableau
let stagiaires =[`Rosana`, `Talia`, `Sabrine`, `Bacarye`, `souly`, `Aoukas`, `toulapi`,`Badji`];
for (let stagiaire of  stagiaires){
    console.log(stagiaire);
}

//FOR...IN --->Pour accéder aux index du tableau
for (let position in stagiaires) {
    console.log(`(${position}, ${stagiaires[position]})`);
}

//MOT CLE BREAK
//**********

for (let i =1; i<= 10; ++){
    if (i ===6) {
        break;
    }
    console.log(i);
}
//continue saute l'élèment 6
for (let i =1; i<= 10; ++){
    if (i ===6) {
        continue
    }
    console.log(i);
}

