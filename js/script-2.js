const openButton = document.querySelector('button[data-action="open"]');
const closeButton = document.querySelector('button[data-action="close"]');

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`)

openButton.addEventListener("click", () => {
  instance.show();
});

closeButton.addEventListener("click", () => {
  instance.close();
});
  
