
let inputIn = document.querySelector('.input');
let button = document.querySelector('button');

let output;

button.onclick = processing;

 function processing () {
  output = makeLongestWordsArray (inputIn.value);
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

  function makeLongestWordsArray (string) {
    const cleanString = string.replaceAll(',', '')
    .replaceAll('.', '')
    .replaceAll('!', '')
    .replaceAll('?', '');
    const arr = cleanString.split(" ");
    let longestWord = arr[0];
    let longestWordIndex = 0;
    for (let i = 1; i < arr.length; i+=1) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
        longestWordIndex = i;
      }
      else {
        continue;
      }
    }

    let longestWordsArray = [];
    for (let i = longestWordIndex; i < arr.length; i+=1) {
      if (arr[i].length === longestWord.length) {
        let wordToAdd = " " + arr[i];
        longestWordsArray.push(wordToAdd);
      }
      else {
        continue;
      }
    }
    return longestWordsArray;
  }