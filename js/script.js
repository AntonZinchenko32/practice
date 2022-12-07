const message = makeLongestWordsArray("собачка сходила в туалет");
alert(message);



function adding(x, y) {
    const sum = x+y;
    const frase = 'Welcome! Сумма чисел равна ';
    return frase + sum;
  }


 
  
  function makeLongestWordsArray (string) {
    const arr = string.split(" ");
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