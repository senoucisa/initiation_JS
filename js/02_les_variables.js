/*************
 LES VARIABLES
 *************/
// alert("js okay"); 

// losque l'on a besoin de stocker une information on utitlise une variable.Une variable peut -etre interprete comme une boite dans laquelle nous allons stocker une information.

// il existe plusieurs variable 

// pour declarer une variable(la creer):

var prenom; 

// pour lui affecter une valeur:

 var prenom= 'samia';

// Afficher la valeur d'une variable:
// a-pour tester une valeur on ouvre la console de navigateur (f12)puis on ecrit le nom de la variable à droite des ">>"puis entrer.

// b- afficher une alerte avec la variable (ne pas mettre de guillemet)
// alert(prenom);

// c- on écrit dans le script(code)
console.log('samia');

// il est possible d'écrire des plusieurs variables sur une seule ligne:
var nb1, nb2, nb3;
// & lui affecter des valeurs:
nb1=1;
nb2=50;
nb3=220;
// une instruction se termine toujours par un point virgule.
// le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de ponctuation(espace,accent...).

// /!\ le js est sensible a la casse /!\(alt gr+8 pour avoir "\")

// mavariable different de maVariable ou ma_variable.
// ecriture snake case=>ma_variable
// / ecriture camel case=>maVariable.

// Les types des variables:

// --typeof,nous permet de connaitre le type de ma variable:
console.log(typeof prenom);
// --déclaration et affectation d'un nombre:
var Age = 40;
console.log(typeof Age);

// --les variables de type FLOAT
 var uneDecimal=-2.984;
 console.log(typeof uneDecimal); 
//  la console retourne"number" donc un ou plusieur  chiffres.

// les variables pour les types BOOLéens(boolean)en anglais
// LE BOOLEEN permet de verifier si l'information est vrai ou faux.
var unBoolean= false;// true
console.log(unBoolean);//retourne false
console.log(typeof unBoolean);// retourne boolean

// --Les CONSTANTES

// La declaration CONST permet de créer une constante accessible UNIQUEMENT en Lecture.Sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs.Une constante ne peut-être déclarée qu'une seule fois.

const HOST ="localhost";
const USER ="root";
const PASSWORD ="mysql";

// Donc il est impossible de faire cela:const USER ="samia";
// la console me retournera=>syntaxeError:redeclaration of cont user

// Dans la convention on écrit les constantes en majuscule pour les reconnaitre.
var unNombre="24"; // -- ceci est faux
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne string (chaine de caractere).donc ne jamais mettre de guillemet entre le chiffre dans un var.

// pour convertir le string (chaine de caractere )"24"en number:

unNombre = parseFloat(unNombre); // parseFloat permet d'interpréter le chiffre 24 en chiffre 24
console.log(unNombre);//affiche 24
console.log(typeof unNombre);//retourne number.

// pour convertir un chiffre en string
var nb4 = 93;
console.log(nb4);//affiche 93
console.log(typeof nb4);// la console interprète le NB4 comme un chiffre.


nb4 = nb4.toString();// toString permet de convertir un nombre entier ou décimal en chaine de caractere (string).
console.log(typeof nb4);

   

