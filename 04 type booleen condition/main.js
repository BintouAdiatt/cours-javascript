//LES BOOLEENS

let estvrai= true ;
let estfaux = false

//Operateur de négation
console.log(!estvrai);
console.log(!estfaux);

console.log("a" < "b");
console.log("A" > "b");
console.log(O == "");

let age = 24;
if (age >= 25) {
    console.log("super Division ");
}
if ((age >= 18) && (age < 25)) {
    console.log("Division normale");
} else {
    console.log("Division mineur");
}

let condition = false;
condition = 0;
condition = "";
condition = non;
condition = undefined;
condition = null;

condition = true;
condition = 2;
condition = "yfhfg"

if (condition){
    console.log("condition vérifiée !!!");
}


//OPERATEUR TERNEAIRE
message = (age >=18 ? "vous etes majeur(s) " ; "vous etes mineur(s)") ;
alert(`message - - > ${message}`);

//switch

let numeroDuJour =Number(prompt(message "saisi le numero du jour de la semaine "));
let message ;
switch (numeroDuJour) {
    case 1:
        message ="Lundi";
    break;
    case 2:
        message = "Mardi";
    break;
    case 3:
        message = "Mercredi";
        break;
    case 4:
        message = "Jeudi";
        break;
    case 5:
        message = "Vendredi";
        break;
    case 6:
        message = "Samedi";
        break;
    case 7:
        message = "Dimanche";
    default:

        message = "vorte saisi correspond à  ${message}";

}