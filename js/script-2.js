const myBtn = document.querySelector('.hui');

myBtn.addEventListener("click", ohuevai);


function ohuevai(event) {
	isSuccess = true;
}
console.log("test")

// Change value of isSuccess variable to call resolve or reject
let isSuccess = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"