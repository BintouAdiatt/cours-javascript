//boucle for
for (let compteur < 11;compteur++){
    console.log(compteur);}

let affichage = "";
    affichage =affichage + compteur + "";
    ou
    affichage += compteur + "";
    ou
    affichage += `${compteur}`;
    console.log(compteur);
} console.log(affichage)

//boucle while ()
let compileError = 1;
while(compteur < 11){
    console.log(compteur);
    compteur++
}

//boucle do while
let compteur = 1;
do{
    console.log(compteur);
    compteur++
} while(compteur < 11);


//partie 2
//afficher la somme de 1 à 10
let somme = 0
for (let i = 1; i < 10; i++){
    somme += i;
}console.log(somme); =====>55

//
//================================================================
//saisi deux nombres n et m. dans le cas ou n est supersieur à m
//=================================================================
let m = Number(prompt(message "M"));
let  = Number(prompt(message "N"));
//afficher un message a l'itulisateur que n doit etre inferieur à m
if (n > m){
    console.log(n doit etre inferieur à m)
}

//afficher les nombres de n à m de matière décroissante
if (n > m){
    for (let i = n; i >=m; i--)
        console.log(i);
}

affichage la somme des nombres pairs de n à m

let somme = 0;
if (n > m){
    for (let i = n; i >= m; i--){
        if (i % 2===0){
            somme += i;
        }
    }
} console.log(somme);

llire n nombre et en calcul la moyenne

let n, somme, moyenne, compteur = 0;
do {
    do {
        n = Number(prompt(message "entrez le nombre de valeur à saisir"));
    }while(Number.isNaN(n));
    for (let i = 1; i < n; i++){
        let value = Number(prompt(message "saisir la valeur ${i}"));
        if (!Number.isNaN(value)){
        somme += value;
        compteur++;
    }
}moyenne = somme /compteur;
    console;
    console.log(moyenne)