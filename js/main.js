// this is JavaScript module syntax
// IIFE (this is the technical name)
(() => {
// stub
console. log(‘fired’);

let theBadge = document.querySelector('.PromoImage_wrapper img'),
		theBadges = document.querySelectorAll('.PromoImage_wrapper img');

function logMe() {
	console.log(‘clicked on an image!’);
}

theBadge.addEventListener("click", logMe);
theBadge.forEach(badge => badge.addEventListener("click", logMe));
})()
