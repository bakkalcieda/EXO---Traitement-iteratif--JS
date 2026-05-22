// 09 Traitement itératif
// ----------------------------------------------- //
//-----------, EXO 1 -------------------------------
//Demandez à l'utilisateur d'entrer un nombre et afficher la table de multiplication de ce nombre de 0 à 30.

document.getElementById("btn").addEventListener("click", function() {

    const nombre = parseInt(document.getElementById("nombre").value);
    let html = "";
    // le _ c la valeur de la case
    const nombres = Array.from({length: 31}, (_, i) => i); 
    for (const i of nombres) {
        html += "<p>" + nombre + " x " + i + " = " + (nombre * i) + "</p>";
    }
    document.getElementById("resultat").innerHTML = html;

});

// ------------------------------------------------------------- //
//--------------------- EXO 2------------------------------------//
//Demandez à l'utilisateur d'entrer un nombre 'x' et calculez les 'x' premiers nombres premier

document.getElementById("btn2").addEventListener("click", function() {
    const x = parseInt(document.getElementById("nombre2").value);
    const div = document.getElementById("resultat2");
    let html = "";
    let compteur = 0;

    for (let nombre = 2; compteur < x; nombre++) {
        const racine = Math.sqrt(nombre);
        const limite = Math.floor(racine);
        let estPremier = true;

        for (let d = 2; d <= limite; d++) {
            if (nombre % d === 0) {
                estPremier = false;
            }
        }

        if (estPremier) {
            compteur++;
            html += "<p>" + nombre + "</p>";
        }
    } 

    div.innerHTML = html;
});



// ----------------------------------------------------------------- //
//------------------------EXO 3 -----------------------------------//
//Demandez à l'utilisateur d'encoder un nombre et demandez lui de choisir une base (2, 8, 16) et convertissez ce nombre dans la base de destination. 
//Le résultat doit être mis dans un champs texte en lecture seule.//
document.getElementById("btn3").addEventListener("click",function() {

    const nombre = parseInt(document.getElementById("nombre3").value);
    const base = parseInt(document.getElementById("base3").value);
    const resultat= convertir(nombre,base);

document.getElementById("resultat3").value = resultat;
});

function convertir (nombre,base) {
    if (nombre ===0) {
        return "0";
    }

    let resultat = "";
    let n = nombre;

    const chiffres = "0123456789ABCDEF"
    while (nombre > 0) {
        let reste = nombre % base;
        resultat = chiffres [reste] + resultat ;
        nombre = Math.floor (nombre / base );
    }

    if (resultat === "") {
        resultat = "0";
    }
document.getElementById("resultat3").value = resultat;
}






// ---------------------------------------------------------------------//
//------------------------ EXO 4 -----------------------------------------//
//Demandez à l'utilisateur d'encoder un nombre en base (2, 8, 16) et convertissez ce nombre dans la base 10 (décimale). 
//Le résultat doit être mis dans un champs texte en lecture seule.


// ----------------------------------------------------------//
//--------------- EXO 5 ----------------------------------------//
//Comme en primaire, réalisez l'addition de deux nombres.

//--------------------------------------------------------------------//
//--------------------------- BONUS -----------------------------------//
//Bonus : réalisez un convertisseur de base (2 à 36) à base (2 à 36), la base de destination doit-être différente de la base de départ.
//Le résultat doit être mis dans un champs texte en lecture seule.*/


// const array = [1,2,3];
// const items = array;

// for(const element of items) {
//     console.log(element)
// }

// array.push(42);

// for (const element of items) {
//     console.log(element);
    
// }