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
			
			<div class="disc-fig"><figure><figcaption class="thecaption"><h2>${data[i].name}<h2></figcaption><img class='discover-image' src='images/${data[i].src}' alt='${data[i].name}'></figure></div>

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

/*
function setVisitDate() {

// Check if localStorage is supported by the browser
if (typeof (Storage) !== "undefined") {
	// Get the current date and time
	const now = new Date();

	// Convert the date to a string or timestamp for storage
	// Using toISOString() for a consistent string format
	const visitDateString = now.toISOString();

	// Store the visit date in localStorage
	localStorage.setItem("lastPageVisit", visitDateString);

	// Example of retrieving and comparing the date (optional)
	const storedVisitDate = localStorage.getItem("lastPageVisit");
	if (storedVisitDate) {
		const previousVisit = new Date(storedVisitDate);
		console.log("Last visit was on:", previousVisit.toLocaleString());
		console.log("Current visit is on:", now.toLocaleString());

		// You can then perform comparisons, e.g., if it's been more than a day
		const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
		if (now.getTime() - previousVisit.getTime() > oneDayInMilliseconds) {
			console.log("It's been more than a day since the last visit!");
		}
	}
} else {
	console.log("Sorry, your browser does not support Web Storage.");
}
	

}

*/


/*************two************************/

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

/*
// Function to get and compare the visit date
function getAndCompareVisitDate() {

	const storedDateString = localStorage.getItem('lastVisitDate');
	if (!storedDateString)

	if (storedDateString) {
		const lastVisitDate = new Date(storedDateString);
		const now = new Date();

		// Example comparison: check if it's a new day since last visit
		const isNewDay = now.toDateString() !== lastVisitDate.toDateString();

		if (isNewDay) {
			console.log("Welcome back! It's a new day since your last visit.");
		} else {
			console.log("You've visited this page today already.");
		}

		// You can perform other comparisons here, e.g., time difference
		const timeDifferenceMs = now.getTime() - lastVisitDate.getTime();
		console.log(`Time since last visit: ${timeDifferenceMs / (1000 * 60 * 60)} hours`);

	} else {
		console.log("This is your first visit to this page.");
	}
}

// Set the visit date when the page loads
//setVisitDate();

// Get and compare the visit date after setting it (or on subsequent loads)
getAndCompareVisitDate();
*/
/*************two************************/
