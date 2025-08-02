document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded
	const dataContainer = document.getElementById('dataContainer');
	const gridViewBtn = document.getElementById('gridViewBtn');
	const listViewBtn = document.getElementById('listViewBtn');

	let currentData = []; // To store the fetched JSON data

	// Fetch JSON data
	async function fetchData() {
		try {
			const response = await fetch('./data/members.json'); // Adjust path as needed
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			currentData = data; // Store the data
			renderGrid(currentData); // Default to grid view
		} catch (error) {
			console.error('Error fetching data:', error);
			dataContainer.innerHTML = 'Error loading data.';
		}
	}


	// Render data in grid view
	function renderGrid(data) {
		dataContainer.innerHTML = ''; // Clear previous content
		const gridContainer = document.createElement('div');
		gridContainer.classList.add('grid-container');
		data.forEach(member => {
			const gridItem = document.createElement('div');
			gridItem.classList.add('grid-item');
			gridItem.innerHTML = `
				<h2>${member.businessName}</h2>

				<p>${member.imageName}</p>
				<p>╔══❖═══════❖══╗</p>

				<p class='caption'> ${member.caption}</p>

				<p class='address'> ${member.street}</p>
				<p class='address'> ${member.city}, ${member.state} ${member.zipcode}</p>
			
                <p class="phone">${member.phoneNumber}</p>
                <p class="email">${member.email}</p>
                <p class='url'>${member.webUrl}</p>
            `;
			gridContainer.appendChild(gridItem);
		});
		dataContainer.appendChild(gridContainer);
	}

	// Render data in list view
	function renderList(data) {
		dataContainer.innerHTML = ''; // Clear previous content
		const listContainer = document.createElement('ul');
		listContainer.classList.add('list-container');
		data.forEach(member => {
			const listItem = document.createElement('li');
			listItem.classList.add('list-item');

			listItem.innerHTML = `
            	<h4>${member.businessName}</h4>
				<p>${member.imageName}</p>

				<p class='listcaption'> ${member.caption}</p>
				<p class='address'> ${member.street}</p>
				<p class='address'> ${member.city}, ${member.state} ${member.zipcode}</p>
			
                <p class="phone">${member.phoneNumber}</p>
                <p class="email">${member.email}</p>
                <p class='url'>${member.webUrl}</p>

            `;
			listContainer.appendChild(listItem);
		});
		dataContainer.appendChild(listContainer);
	}

	// Event listeners for buttons
	gridViewBtn.addEventListener('click', () => {
		renderGrid(currentData);
	});

	listViewBtn.addEventListener('click', () => {
		renderList(currentData);
	});

	// Initial fetch of data
	fetchData();
});
