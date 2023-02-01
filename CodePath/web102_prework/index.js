import GAMES_DATA from './games.js';

const GAMES_JSON = JSON.parse(GAMES_DATA);

function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const gamesContainer = document.getElementById("games-container");

function addGamesToPage(games) {
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
        <img src="${game.img}" alt="${game.title}" class="game-img"/>
        <div class="card-text">
            <h2>${game.name}</h2>
            <!-- <p><strong>${game.name.toLocaleString()}</strong></p> -->
            <p>${game.description.toLocaleString()}</p>
            <p>Backers: ${game.backers.toLocaleString()}</p>
        </div>`;
        gamesContainer.appendChild(gameCard);
    }
}
filterUnfundedOnly();
console.log(gamesContainer.childElementCount);

const contributionsCard = document.getElementById("num-contributions");
const totalContributions = GAMES_JSON.reduce((acc, game) => {
    return acc + game.backers;
}, 0);
contributionsCard.innerHTML = `<h2>${totalContributions.toLocaleString()}</h2>`;

const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged;
}, 0);
raisedCard.innerHTML = `<h2>$${totalRaised.toLocaleString()}</h2>`;

const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = `<h2>${GAMES_JSON.length.toLocaleString()}</h2>`;

function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    const unfundedGames = GAMES_JSON.filter(game => game.goal > game.pledged);
    addGamesToPage(unfundedGames);
}

function filterFundedOnly() {
    deleteChildElements(gamesContainer);
    const fundedGames = GAMES_JSON.filter(game => game.goal <= game.pledged);
    addGamesToPage(fundedGames);
}

function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);
}

const unfundedBtn = document.getElementById("unfunded-btn");
unfundedBtn.addEventListener('click', filterUnfundedOnly);

const fundedBtn = document.getElementById("funded-btn");
fundedBtn.addEventListener('click', filterFundedOnly);

const allBtn = document.getElementById("all-btn");
allBtn.addEventListener('click', showAllGames);



const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item

console.log(GAMES_JSON.filter(game => game.goal > game.pledged).length);