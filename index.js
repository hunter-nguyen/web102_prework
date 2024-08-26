/*************************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    // loop over each item in the data
    for (const game of games) {
        // Create a new div element, which will become the game card
        const gameCard = document.createElement("div");

        // Add the class game-card to the div
        gameCard.classList.add("game-card");

        // Set the inner HTML using a template literal to display some info about each game
        gameCard.innerHTML = `
            <img src="${game.img}" class="game-img" alt="${game.name} Image"/>
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p>Goal: $${game.goal.toLocaleString()}</p>
            <p>Pledged: $${game.pledged.toLocaleString()}</p>
        `;

        // Append the game to the games-container
        gamesContainer.appendChild(gameCard);
    }
}

/*****************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((total, game) => total + game.backers, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = totalContributions.toLocaleString();

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON.reduce((total, game) => total + game.pledged, 0);
raisedCard.innerHTML = `$${totalRaised.toLocaleString()}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = GAMES_JSON.length;

/*****************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // Use filter() to get a list of games that have not yet met their goal
    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);

    // Use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);

    // Log the number of unfunded games for verification
    console.log(unfundedGames.length);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // Use filter() to get a list of games that have met or exceeded their goal
    const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);

    // Use the function we previously created to add the funded games to the DOM
    addGamesToPage(fundedGames);

    // Log the number of funded games for verification
    console.log(fundedGames.length);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // Add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*****************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// Use filter or reduce to count the number of unfunded games
const numUnfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal).length;

// Create a string that explains the number of unfunded games using the ternary operator
const descriptionText = `There ${numUnfundedGames === 1 ? 'is' : 'are'} ${numUnfundedGames} ${numUnfundedGames === 1 ? 'game' : 'games'} that has${numUnfundedGames === 1 ? ' not' : ' not'} yet met its goal.`;

// Create a new DOM element containing the template string and append it to the description container
const descriptionElement = document.createElement("p");
descriptionElement.innerHTML = descriptionText;
descriptionContainer.appendChild(descriptionElement);

/*****************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort
*/

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// Sort the games by pledged amount in descending order
const sortedGames = [...GAMES_JSON].sort((item1, item2) => item2.pledged - item1.pledged);

// Use destructuring and the spread operator to grab the first and second games
const [topGame, secondGame] = sortedGames;

// Create a new element to hold the name of the top pledge game, then append it to the correct element
firstGameContainer.innerHTML = `<h2>${topGame.name}</h2><p>Pledged: $${topGame.pledged.toLocaleString()}</p>`;

// Do the same for the runner-up item
secondGameContainer.innerHTML = `<h2>${secondGame.name}</h2><p>Pledged: $${secondGame.pledged.toLocaleString()}</p>`;
