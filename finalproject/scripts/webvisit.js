
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
		messageDisplay.innerText = `We love to see you revisiting!! `;
	}
	else {
		messageDisplay.innerText = `We missed you - You last visited ${differenceInDays} days ago.`;
	}
	// Update the last visit date for subsequent visits
	localStorage.setItem("lastVisit", new Date().toISOString());
}

