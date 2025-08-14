// breadcrumbs.js

document.addEventListener('DOMContentLoaded', function () {
	const breadcrumbList = document.getElementById('breadcrumb-list');
	const pathNames = window.location.pathname.split('/').filter(path => path);

	// Add "Home" as the first breadcrumb
	const homeItem = document.createElement('li');
	const homeLink = document.createElement('a');
	homeLink.href = '/';
	homeLink.textContent = 'Home';
	homeItem.appendChild(homeLink);
	breadcrumbList.appendChild(homeItem);

	// Generate breadcrumbs from the URL path
	let currentPath = '';
	pathNames.forEach((item, index) => {
		currentPath += `/${item}`;
		const listItem = document.createElement('li');
		const link = document.createElement('a');

		link.href = currentPath;
		// Capitalize the first letter of each breadcrumb item
		link.textContent = item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, ' ');

		listItem.appendChild(link);

		if (index === pathNames.length - 1) {
			listItem.classList.add('current-page'); // Highlight the current page
		}
		breadcrumbList.appendChild(listItem);
	});
});







/*
function generateBreadcrumbs(path) {
	const breadcrumbList = document.getElementById('breadcrumb');
	breadcrumbList.innerHTML = ''; // Clear existing breadcrumbs

	// Add the Home link
	const homeItem = document.createElement('li');
	homeItem.className = 'breadcrumb';
	homeItem.innerHTML = '<a href="/">Home</a>';
	breadcrumbList.appendChild(homeItem);

	const pathParts = path.split('/').filter(part => part !== '' && part.endsWith(".html")); // Remove empty strings

	let currentPath = '';
	for (let i = 0; i < pathParts.length; i++) {
		const part = pathParts[i];
		currentPath += `/${part}`;

		const listItem = document.createElement('li');
		listItem.className = 'breadcrumb';

		if (i === pathParts.length - 1) { // Current page
			listItem.textContent = decodeURIComponent(part).replace(/-/g, ' ').replace('.html', '').toUpperCase();
			listItem.setAttribute('aria-current', 'page');
			listItem.className = "current";
		} else {
			listItem.innerHTML = `<a href="${currentPath}">${decodeURIComponent(part).replace(/-/g, ' ').replace('.html', '').toUpperCase()}</a>`;
		}
		breadcrumbList.appendChild(listItem);
	}
}

//  "Directory" page
if (window.location.pathname.includes('directory')) {
	generateBreadcrumbs(window.location.pathname);
}
//  "Development" page
if (window.location.pathname.includes('discover')) {
	generateBreadcrumbs(window.location.pathname);
}
//  "join" page

if (window.location.pathname.includes('join')) {
	generateBreadcrumbs(window.location.pathname);
}
*/