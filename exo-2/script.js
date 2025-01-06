// you can write js here
console.log('exo-2');

var isTesting = true;

const myDate = new Date();
var week = 'Dommage c\'est encore la semaine !';
var weekEnd = 'C\'est le week-end !';

var day = myDate.getDay();
var hour = myDate.getHours();


if (isTesting == true) {
    day = prompt("Quelle jour est-il ? (0 pour dimanche, 1 pour lundi, 2 pour mardi, 3 pour mercredi, 4 pour jeudi, 5 pour vendredi, 6 pour samedi)");
    hour = prompt("Quelle heure est-il ?");
    if (day == 0 || day == 5 || (day == 4 && hour >= 17) || (day == 1 && hour < 9)) {
    console.log(weekEnd);
} else {
    console.log(week);
}
}