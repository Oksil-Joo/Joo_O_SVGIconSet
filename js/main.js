// this is JavaScript module syntax
// IIFE (this is the technical name)
(() => {
// stub
console. log(‘JS is linked!’);

let theButton = document.querySelector(“.icon-button”);

function logClick() {
	console.log(‘clicked the button!’);
}

theButton.addEventListener(‘click’, logClick);
})();
