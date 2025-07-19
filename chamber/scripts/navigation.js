const navLinks = document.querySelector('#nav-bar');
const navButton = document.querySelector('#ham-btn');


navButton.addEventListener('click', () => {
	navButton.classList.toggle('show');
	navLinks.classList.toggle('show');

});


