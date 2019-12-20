// alert("okay");
// --Declarer un tableau INDEXER:

// 1-
var monTableau =[];
console.log(monTableau);
// pour faire les accolade c'est altgr+5.
// 2-
var myArray = new Array;
console.log(myArray);
// myArray et mon tableau sont des tableaux qui peuvent contenir plusieurs informations.

// Affecter des valeurs au tableau,plusieurs méthode:
// a-
var nosPrenoms = ["Christian","Philippe","Mamadou","18","20"];
console.log(nosPrenoms);
// b-
monTableau[0] = "Christian";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
console.log(monTableau);

// --Déclarer et affecter des valeurs a un objet.

var Coordonnee = {
    prenom: "Hugo",
    nom: "LIEGEARD",
    age: 82
};
console.clear(); 
// permet d'éffacer les lignes de débug qui précède le console .clear();
console.log(Coordonnee);
// j'affiche toute les informations de mon tableau.
console.log(Coordonnee['prenom']);
// j'affiche que le prenom.
console.log(Coordonnee.nom);

// on va créer 2 tableaux indexé.w

var listeDePrenom =["Oussmane","Cherif","Hugo"];
var listeDeNom = ["Mama","Benalal","LIEGEARD"];
var annuaire = [listeDePrenom,listeDeNom];
console.log(annuaire);
document.write();
// fonction native de js qui permet d'inscrire un résultat directement sur la page HTMLet non plus sur la console.
document.write(annuaire[0][2] +" "+annuaire[1][2]);
document.write("<hr>");
document.write(annuaire[0][0]);
document.write(" ");
document.write(annuaire[1][1]);
// Tableau à 2 dimensions non indexé

var contact = [
    {prenom:"Hugo", nom:"LIEGEARD",tel:"0783971515"},
    {prenom:"Salim", nom:"SOUMARE",tel:"0783971314"},
    {prenom:"Pransun", nom:"BALASUBRA",tel:"0783972584"},
];
console.log(contact);




// créez un tableau a 2 dimensions appelé AnnuaireDesStagiaires qui contiendra toutes les coordonnées pour chaque stagiaire.ex: Nom,Prenom,tel

var AnnuaireDesStagiaires =[
    {  prenom:"Sahar", nom:"bouazza",tel:"0148444765"},
    {prenom:"maria",nom:"Gonzales",tel:"0158754214"},
];
console.log(AnnuaireDesStagiaires);

// --exemple à 3 dimensions

var array3Dimension =[
    {
        prenom:"Hugo",
        nom : "LIEGEARD",
        coordonnees:{
            email : "hugo.liegeard@lepoles.com",
            tel:{
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port:{
                    prive:"07 83 97 10 15",
                    pro : "07 83 97 15 15"
                } 
            },
            adresse:{
                ville:"DUCOS",
                cp:"97224",
                region:"Martinique",
                pays:{
                    code:"FR",
                    nom:"FRANCE"
                }
            }
        }
    }
];
console.log(array3Dimension);
console.log(array3Dimension[0].coordonnees.email);

// Ajouter un element

var couleur = ['Rouge','Jaune','Vert'];
console.clear();
console.log(couleur);
console.log(couleur.length);
// Pour ajouter un element dans mon tableau,je fais appel a la fonction push.
var nbElementsdeMonTableau = couleur.push('violet');
console.log(couleur);
console.log(nbElementsdeMonTableau);

// Pour ajouter un element au debut de mon tableau ,je vais faire appel a la fonction unshift
var nbElementsdeMonTableau = couleur.unshift('bisque','rose');
console.log(couleur);
console.log(nbElementsdeMonTableau);

// Supprimer un ou plusieurs element de mon tableau,je fais appel a la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementsdeMonTableau);

// Pour supprimer le premier element de mon tableau,j'utilise la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementsdeMonTableau);




   

  

