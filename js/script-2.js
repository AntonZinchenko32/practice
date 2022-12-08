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

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  
  const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
      allTags.push(...tweet.tags);
  
      return allTags;
    }, []);
  
  const tags = getTags(tweets);
  
  // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
  // Это стандартная практика если callback-функция довольно большая.
  
  // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
  // то создаем его и записывает ему значение 0.
  // В противном случае увеличиваем значение на 1.
  const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
      acc[tag] = 0;
    }
  
    acc[tag] += 1;

    return acc;
  };
  
  // Начальное значение аккумулятора это пустой объект {}
  const countTags = tags => tags.reduce(getTagStats, {});
  
  const tagCount = countTags(tags);
  
  
