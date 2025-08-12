import places from "./places.js"

const data = places;
displayItems(data);

const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
	learnMoreBtn.addEventListener('click', () => {
		goToURL(URL);  //URL 
	});
}

function displayItems(data) {

	const gridContainer = document.getElementById('discover-grid-container');

	for (let i = 0; i < data.length; i++) {

		const gridItem = document.createElement('div');
		gridItem.classList.add('image-card');
		gridItem.innerHTML = `
			
			<div class="disc-fig"><figure><figcaption class="thecaption"><h2>${data[i].name}</h2></figcaption><img class='discover-image' src='images/${data[i].src}' alt='${data[i].name}' width="300" height="200" loading="lazy"></figure></div>

			<p class='discover-description'>${data[i].description}</p>
			<p class='address'>${data[i].address}</p>
		`;

		const buttonElement = document.createElement('button');
		buttonElement.classList.add('pretty-button');
		buttonElement.classList.add('button');

		buttonElement.textContent = 'LEARN MORE';
		// Use a valid URL property from your data, e.g., data[i].url
		buttonElement.onclick = function () {
			if (data[i].url) {
				window.location.href = data[i].url;
			} else {
				alert('No URL available for this item.');
			}
		};
		gridItem.appendChild(buttonElement);
		gridContainer.appendChild(gridItem);
	}
};



// Function to set the visit date in local storage

function setVisitDate() {
	const now = new Date();
	localStorage.setItem('lastVisitDate', now.toISOString()); // Store as ISO string for easy parsing
}
// Get a reference to the display area (e.g., a div with id "message")
const messageDisplay = document.getElementById("lastVisitDisplay");

// Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
	// If no lastVisit exists, it's the first visit
	messageDisplay.innerText = "Welcome! Let us know if you have any questions.";
	// Store the current date as the last visit date for future checks
	localStorage.setItem("lastVisit", new Date().toISOString());
} else {
	// Otherwise, calculate days since the last visit and display
	const lastVisitDate = new Date(lastVisit);
	const currentDate = new Date();
	const differenceInDays = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));
	if (differenceInDays < 1) {
		messageDisplay.innerText = `Back so soon! Awesome! `;
	}
	else {
		messageDisplay.innerText = `You last visited ${differenceInDays} days ago.`;
	}
	// Update the last visit date for subsequent visits
	localStorage.setItem("lastVisit", new Date().toISOString());
}

