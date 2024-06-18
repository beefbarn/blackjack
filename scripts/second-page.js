document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const outputDiv = document.getElementById('output');
    const cardDiv = document.getElementById('card-result');
    let userName = ""; // Variable to store user input
  
    userInput.addEventListener('input', (event) => {
      userName = event.target.value; // Update userName whenever input changes
    });
  
    const conditionMet = (userName) => {
      // Replace with your custom condition logic
      if (userName === 'chris'||'paul'||'beef'||'tenders'||'ingrid') {
        if (userName === 'chris') {
            return 1;
        } else if (userName === 'paul') {
            return 2;
        } else if (userName === 'beef') {
            return 3;
       } else if (userName === 'tenders') {
            return 4;
       } else if (userName === 'ingrid') {
            return 5;
       }
    }
}
  
hitButton.onclick = () => {
  const yourSuit = getSuit();
  const yourCard = getCard();
  cardDiv.textContent = `You hit for a ${yourCard} ${yourSuit}. That brings your hand to tbd.`
}

    const printText = () => {
      if (conditionMet(userName)) {
        ticker = conditionMet(userName);
        outputDiv.textContent = `You hear the voice whisper, "Hello, ${userName}. Welcome to your doom."`;
        if (ticker === 1) {
            outputDiv.innerHTML += '<br>~"Welcome, you fool!"~';
        } else if (ticker === 2) {
            outputDiv.innerHTML += '<br>~"Welcome, programmer"!~';
        } else if (ticker === 3) {
            outputDiv.innerHTML += '<br>~"Welcome, almighty meat!"~';
        } else if (ticker === 4) {
            outputDiv.innerHTML += '<br>~"Welcome, o legendary warrior!"~';
        } else {
            outputDiv.innerHTML += '<br>~"Welcome, wicked one!"~';
        }
      } else {
        outputDiv.textContent = `"Hello, who are you?" -says an ominous voice...`;
      }
    };

    userInput.addEventListener('input', printText); // Call printText on input change
  });
  
  

let hitButton = document.querySelector("#hitme");
let standButton = document.querySelector("#standme");

//gets random number times a mult value
const getRandNum = (mult) => {
    let randNum = Math.floor(Math.random()*mult)
    return randNum
}

//gets a card value string from the random number 0-12
const getCard = () => {
    let cardset = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    return cardset[getRandNum(13)];
}

//gets a random suit from 0-3
const getSuit = () => {
    let cardSuits = ['of Spades', 'of Clubs', 'of Hearts', 'of Diamonds'];
    return cardSuits[getRandNum(4)];
}



