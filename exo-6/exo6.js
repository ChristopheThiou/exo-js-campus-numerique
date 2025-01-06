// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true;
console.log(joeInfo.garage);

var team = {
    players: [
        {   
            firstName: "Joao",
            lastName: "Marco",
            age: 20,
        },
        {
            firstName: "Victor",
            lastName: "Hugo",
            age: 22,
        },
        {
            firstName: "El",
            lastName: "Pedro",
            age: 45,
        }
    ],
    games: [
        {
            opponent: "Real Madrid",
            teamPoints: 3,
            opponentPoints: 0,
        },
        {
            opponent: "Barcelona",
            teamPoints: 0,
            opponentPoints: 3,
        },
        {
            opponent: "Valencia",
            teamPoints: 1,
            opponentPoints: 1,
        }
    ]
};

addPlayer = (firstName, lastName, age) => {
    team.players.push({firstName, lastName, age});
}

addPlayer("Jean", "Bon", 30);

addGame = (opponent, teamPoints, opponentPoints) => {
    team.games.push({opponent, teamPoints, opponentPoints});
}

addGame("Marseille", 3, 0);

console.log(team.players);
console.log(team.games);

const totalTeamPoints = team.games.reduce((total, game) => total + game.teamPoints, 0);

console.log(`Total des points de l'équipe: ${totalTeamPoints}`);

const averageOpponentPoints = team.games.reduce((total, games) => total + games.opponentPoints, 0) / team.games.length;

console.log(`Moyenne des points adverses: ${averageOpponentPoints}`);

const oldestPlayer = team.players.reduce((oldest, player) => {
    if (player.age > oldest.age) {
        return player;
    } else {
        return oldest;
    }
}
, {age: 0});

console.log(`Le joueur le plus âgé est ${oldestPlayer.firstName} ${oldestPlayer.lastName} avec ${oldestPlayer.age} ans.`);

const alphabeticallyPlayers = team.players.sort((a, b) => {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    } else {
        return 0;
    }
}
);

console.log(alphabeticallyPlayers);