/*---------------------------------

DECK BUILD OUT

----------------------------------*/

// DECLARE CARD TYPES - PULL INTO FUNCTION AND ITERATE OVER
const cardDeck = [
        {
            name: "Porsche",
            frontImg: "assets/porsche-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "porsche"
       },
       {
            name: "Pontiac",
            frontImg: "assets/pontiac-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "pontiac"
        },
        {
            name: "Rolls Royce",
            frontImg: "assets/rolls-royce-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "rolls royce"
       },
       {
            name: "BMW",
            frontImg: "assets/bmw-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "bmw"
       },
       {
            name: "Seat",
            frontImg: "assets/seat-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "seat"
        },
       {
            name: "Saab",
            frontImg: "assets/saab-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "saab"
       },
       {
            name: "Volvo",
            frontImg: "assets/volvo-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "volvo"
       },
       {
            name: "Porsche",
            frontImg: "assets/porsche-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "porsche"
       },
       {
            name: "Renault",
            frontImg: "assets/renault-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "renault"
       },
       {
            name: "Saab",
            frontImg: "assets/saab-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "saab"
        },
       {
            name: "Ford",
            frontImg: "assets/ford-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "ford"
       },
       {
            name: "Renault",
            frontImg: "assets/renault-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "renault"
        },
       {
            name: "BMW",
            frontImg: "assets/bmw-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "bmw"
        },
        {
            name: "Ford",
            frontImg: "assets/ford-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "ford"
       },
       {
            name: "Seat",
            frontImg: "assets/seat-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "seat"
       },
       {
            name: "Volvo",
            frontImg: "assets/volvo-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "volvo"
        },
       {
            name: "Lotus",
            frontImg: "assets/lotus-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "lotus"
       },
       {
            name: "Honda",
            frontImg: "assets/honda-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "honda"
       },
       {
            name: "Chevy",
            frontImg: "assets/chevy-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "chevy"
       },
       {
            name: "Pontiac",
            frontImg: "assets/pontiac-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "pontiac"
       },
       {
            name: "Lotus",
            frontImg: "assets/lotus-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "lotus"
        },
       {
            name: "Rolls Royce",
            frontImg: "assets/rolls-royce-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "rolls royce"
       },
       {
            name: "Honda",
            frontImg: "assets/honda-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "honda"
        },
        {
            name: "Chevy",
            frontImg: "assets/chevy-logo-resized.png",
            backImg: "assets/impossible-triangle.png",
            carMaker: "chevy"
       },
   
];





// USE TEMPLATE LITTERALS TO PULL CARD DATA AND LOOP OVER TO BUILD OUT CARDS
// HELPER FUNCTION TO CREATE CARD TEMPLATE
function cardTemplate(cards){
    // RETURN TEMPLATE LITERAL
    return `
        <div class="card-base" data-carmaker="${cards.carMaker}">
            <div class="card-front">
                <img src="${cards.frontImg}"/>
                <div class="name-back">
                    <h3>${cards.name}</h3>
                </div>
            </div>
            <div class="card-back">
                <img src="${cards.backImg}"/>
            </div>
        </div>
    `;
}



// SHUFFLE DECK 
//VIA KNUTH SHUFFLE
function shuffle(cardDeck) {
    let currentIndex = cardDeck.length,temporaryValue,randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardDeck[currentIndex];
        cardDeck[currentIndex] = cardDeck [randomIndex];
        cardDeck[randomIndex] = temporaryValue;
    }
    return cardDeck;
}

//REARRANGE CARDS ON BOARD ON PAGE LOAD

const gameContainer = document.querySelector("#game-container");
function startGame(){
    let shuffledCards = shuffle(cardDeck);
    for (let i = 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffledCards, function(item){
            gameContainer.append(item);
        });
    }
}

// GET HTML DIV TO RENDER CARD TEMPLATE AND RENDER HELPER FUNCTION TO PAGE
// WRAPPED IN FUNCTION
function buildDeck(){
    startGame();

    document.getElementById("game-container").innerHTML = `
    ${cardDeck.map(cardTemplate).join('')}
`;
}

window.onload = buildDeck();// CHANGED FROM STARTGAME();

/*-------------------------

GAME LOGIC

--------------------------*/

// GLOBAL VARIABLES
const cards = document.querySelectorAll('.card-base');
//const cards = document.querySelectorAll('.card-base');

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;
let score = 0;
let turn = true;
let win = 24;
let openCards = [];
let counter = document.querySelector("#red-score");
let closeicon = document.querySelector(".close");

let modal = document.getElementById("winners-modal");

/*PLAYERS
let redPlayerScore = document.querySelector("#red-score").innerHTML;
const bluePlayerScore = document.querySelector("#blue-player .score");*/

//FLIP CARDS
function flipCard(){

    if (boardLocked) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // FIRST TIME CARD IS CLICKED
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // SECOND CARD FLIP

    hasFlippedCard = false;
    secondCard = this;
    boardLocked = true;

    checkForCardMatch();
}

//CHECK IF CARDS MATCH

function checkForCardMatch(){

    //CHECK TO SEE IF CARDS MATCH VIA MATCHING DATASETS
    let isCardMatch = firstCard.dataset.carmaker === secondCard.dataset.carmaker;

    //ADD SCORE TO PLAYERS
    if( isCardMatch === true ){
        
        //IF CARD MATCHES THEN INTERATE SCORE +1
        //THEN ADD SCORE TO PLAYER SCORE

        score++;
        disableCards();
        return updateScore();

    } else if ( isCardMatch !== true ){
        
        //IF CARDS DO NOT MATCH RUN UNCLIPCARD FUNCTION
        
        return unflipCards();

    } else {

        //FLIP CARDS BACK OVER IF CARDS DO NOT MATCH
        isCardMatch ? disableCards() : unflipCards();

    }

    //isCardMatch ? disableCards() : unflipCards();
}

//DISABLE CARDS IF 2 CARDS ARE "FLIPPED" BUT DON'T MATCH

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//FLIP CARDS BACK IF CARDS DO NOT MATCH

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//RESET CARD DECK

function resetBoard(){
    hasFlippedCard = false;
    boardLocked = false;
    firstCard = null;
    secondCard = null;
}

//UPDATE SCORE OF GAME BASED OFF OF MATCHES

function updateScore(){
    // PLEASE SEE CODE BELOW. I WAS ABLE TO GET THE CODE TO UPDATE ONE PLAYER BUT STRUGGLED WITH IMPLEMENTING THE SECOND PLAYER LOGIC.
    document.getElementById("red-score").innerHTML = `${score}`;
/*
    if(turn === true){
        document.getElementById("red-score").innerHTML = `${score}`;
    } else if( turn === false) {
        document.getElementById("blue-score").innerHTML = `${score}`;
    } else {

    }*/ 
     
}

//ADD EVENT LISTENERS TO EACH CARD

cards.forEach(cards => cards.addEventListener('click', flipCard));

//WINNING MODAL BOX - STRUGGLED WITH IMPLEMENTING A WINNING MESSAGE
/*
function win(){
    if (score === 24){
        //SHOW MODAL BOX
        modal.classList.add("show");

        //ADD FINAL SCORE
        let finalScore = document.getElementById("final-score").innerHTML;

        document.getElementById("final-score").innerHTML = score;

        //CLOSE MODAL BOX
        closeModal();
    }
}*/

// CLOSE MODAL BOX

function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        buildDeck();
    });
}

// MODAL PLAY AGAIN FUNCTIONALITY

function playAgain(){
    modal.classList.remove("show");
    buildDeck();
}   

/*
function points(){
    if(isCardMatch = true){
        playerScore++;
        score.innerHTML = playerScore;
    } else {
        playerScore = 0;
    }
}*/