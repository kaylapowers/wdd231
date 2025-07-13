const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
	navButton.classList.toggle('show');
}); 
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click' ,() => {
	navButton.classList.toggle('show');
	navBar.classList.toggle('show');
});