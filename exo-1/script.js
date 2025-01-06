// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

var kelvins = 294;

// Cette ligne de code convertit une température donnée en degrés Celsius en Kelvins et stocke le résultat dans la variable `celsius`.
var celsius = kelvins - 273;


// Cette ligne de code utilise l'équation pour convertir une température en Celsius en Fahrenheit et stocke le résultat dans la variable `fahrenheits`.
var fahrenheits = celsius * (9/5) + 32;

// Cette ligne de code arrondit la température en Fahrenheit à la valeur entière la plus proche.
console.log(Math.floor(fahrenheits));