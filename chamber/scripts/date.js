document.addEventListener('DOMContentLoaded', function () {
	var currentYear = new Date().getFullYear();
	document.getElementById('copyright-year').textContent = currentYear;
});

function updateLastModified() {
	const lastModifiedElement = document.getElementById('last-modified');
	if (lastModifiedElement) {
		lastModifiedElement.textContent = document.lastModified;
	}
}

// Call the function when the page loads
window.onload = updateLastModified;