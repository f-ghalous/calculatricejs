

function addition(nombreA, nombreB) {
    let resultat = nombreA + nombreB;
    return resultat;
    
}
function multiplication(nombreA, nombreB) {
    let resultat = nombreA * nombreB;
    return resultat;
    
}
function soustraction(nombreA, nombreB) {
    let resultat = nombreA - nombreB;
    return resultat;
    
}
function division(nombreA, nombreB){

    if(nombreB == 0){
        throw new alert("division impossible");
    }
    let resultat = nombreA / nombreB;
            
        
        
    
   
}





var reponse = 1;

do{
     reponse = parseInt(prompt("que souhaitez vous faire?\n\n 1- Addition\n 2- Soustraction\n 3- Multiplication\n 4- Division"));


}while(reponse>4)
alert("sa marche");
do{
    var premierNombre = parseInt(prompt("entrez le premier nombre"));

}while(isNaN(premierNombre))
do{
    var deuxiemeNombre = Number(prompt("entrez le deuxieme nombre "));

}while(isNaN(deuxiemeNombre))



try {
    switch (reponse) {
        case 1:
            alert(addition(premierNombre, deuxiemeNombre));
            break;
        case 2:
            alert(soustraction(premierNombre, deuxiemeNombre));
            break;
        case 3:
            alert(multiplication(premierNombre, deuxiemeNombre));
            break;
        case 4:
            alert(division(premierNombre, deuxiemeNombre));
            break;     
    
        default:
            throw new Error("nous ne somme jamais a l'abri d'un bug");
           
    }
    
} catch (error) {
    alert(error);
    
}

// if (reponse == 1) {

//     alert("le resultat d'addition est: " + addition(premierNombre, deuxiemeNombre) );
    
// } else if(reponse == 2) {
//     alert("le resultat  est: " + soustraction(premierNombre, deuxiemeNombre) );
//     }
//     else if(reponse == 3){
//         alert("le resultat  est: " + multiplication(premierNombre, deuxiemeNombre) );
//     }
//     else{
//         alert("le resultat  est: " + division(premierNombre, deuxiemeNombre) );
//     }




