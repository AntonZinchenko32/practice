
let inputIn = document.querySelector('.input');
let button = document.querySelector('button');

let output;

button.onclick = processing;

 function processing () {
  output = chooseRandom (inputIn.value);
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

  function chooseRandom (string) {
    const cleanString = string.replaceAll('.', '').replaceAll('!', '').replaceAll('?', '');
    
    const arr = cleanString.split(",");

    for (let i = 1; i < arr.length; i+=1) {
        arr[i].replaceAll(' ', '');
      }
    
    var rand = Math.floor(Math.random()*arr.length);
    var rValue = arr[rand];

    return rValue;
  }