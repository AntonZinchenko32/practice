// Ввід-вивід

let inputIn = document.querySelector('.input');
let button = document.querySelector('button');

let output;

button.onclick = processing;

 function processing () {
  output = tags;
  document.getElementById("output").innerHTML = output;
}

inputIn.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});

// Функції, змінні

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const averagePlaytimePerGame = player.time / player.gamesPlayed;

console.log(totalAveragePlaytimePerGame);
  
  
