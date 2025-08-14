// breadcrumbs.js



document.addEventListener('DOMContentLoaded', function () {
	const breadcrumbList = document.getElementById('breadcrumb-list');
	breadcrumbList.innerHTML = ''; // Clear existing breadcrumbs

	// Add the Home link
	const homeItem = document.createElement('li');
	homeItem.className = 'breadcrumbs';
	homeItem.innerHTML = '<a href="/">Home</a>';
	breadcrumbList.appendChild(homeItem);

	const pathParts = window.location.pathname.split('/').filter(part => part !== '' && part.endsWith(".html")); // Remove empty strings

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
});
