// breadcrumbs.js
// Function to generate breadcrumbs dynamically
function generateBreadcrumbs(path) {
	const breadcrumbList = document.getElementById('breadcrumb');
	breadcrumbList.innerHTML = ''; // Clear existing breadcrumbs

	// Add the Home link
	const homeItem = document.createElement('li');
	homeItem.className = 'breadcrumb';
	homeItem.innerHTML = '<a href="/">Home</a>';
	breadcrumbList.appendChild(homeItem);

	const pathParts = path.split('/').filter(part => part !== ''); // Remove empty strings

	let currentPath = '';
	for (let i = 0; i < pathParts.length; i++) {
		const part = pathParts[i];
		currentPath += `/${part}`;

		const listItem = document.createElement('li');
		listItem.className = 'breadcrumb';

		if (i === pathParts.length - 1) { // Current page
			listItem.textContent = decodeURIComponent(part).replace(/-/g, ' ').replace('.html', '').toUpperCase();
			listItem.setAttribute('aria-current', 'page');
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
