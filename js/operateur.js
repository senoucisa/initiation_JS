alert("okay");
// alert("ok js");



/*******************************  EXERCICE 1   *******************************/

// Quelles seront les valeurs des variables A & B après exécution des instructions suivantes ?
var A = 1;
var B = A + 3;
var A = A + B;  
console.log(B);
/*******************************  EXERCICE 2   *******************************/

// Quelles seront les valeurs des variables A, B  & C après exécution des instructions suivantes ?
var A = 5;
var B = 3;
var C = A + B;
A = 2;
C = B - A;
console.log(C);
/*******************************  EXERCICE 3   *******************************/

// Quelles seront les valeurs des variables A, B  & C après exécution des instructions suivantes ?
var A = 5;
var B = A + 4;
A = A + 1;
B = A - 4;
console.log(B);
/*******************************  EXERCICE 4   *******************************/

// Ecrire un algorithme permettant d'échanger les valeurs de deux variables A et B, et ce quel que soit leur contenu préalable.

var A =15;
var B =122;
var C =B; 
// la var C garde la valeur du var A .
A = 7;
console.log(C);

// var A = 6;
// var B = 3;
// var C = B; // retourne 3
// A = C * 3; // retourne 9
// B = A - 3;
// A = B / 2;
// console.log(B); // retourne 6