const numShoutOuts = 3; //number of shouts you want each time
async function getRandomMembers() {
	try {
		const response = await fetch('./data/members.json'); // Fetch the JSON file
		if (!response.ok) { // Check for successful response
			throw new Error(`HTTP error! Status: ${response.status}`); // Throw error for unsuccessful response
		}
		const members = await response.json(); // Parse the JSON data
		const filteredMembers = members.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);

		//console.log(filteredMembers);
		// Shuffle the array to get random members
		const shuffledMembers = filteredMembers.sort(() => Math.random() - 0.5); // Shuffle array randomly

		// Select the first three elements
		const randomMembers = shuffledMembers.slice(0, numShoutOuts); // Slice array to get first three elements

		displayMembers(randomMembers); // Display the selected members

	} catch (error) {
		console.error('Error fetching or processing members:', error); // Log any errors that occur
		const container = document.getElementById('members-container'); // Get the members container
		container.textContent = 'Error loading members. Please try again later.'; // Display error message to the user
	}
}

function displayMembers(members) {
	const container = document.getElementById('soContentArea'); // Get the members container
	container.innerHTML = ''; // Clear previous content

	members.forEach(member => { // Iterate through each selected member
		const memberDiv = document.createElement('div'); // Create a new div for each member
		memberDiv.classList.add('grid-item');
		//memberDiv.classList.add('soContent');

		memberDiv.innerHTML = `
     	<h4>${member.businessName}</h4>
    	<img src='${member.imageName}' alt='${member.businessName}' width='150' height='100' >



		<p class='caption'> ${member.caption}</p>
		<p class='address'> ${member.street}</p>
		<p class='address'> ${member.city}, ${member.state} ${member.zipcode}</p>
	
		<p class="phone">${member.phoneNumber}</p>
		<p class="email">${member.email}</p>
		<p class='url'>${member.webUrl}</p>
    `; // Set the inner HTML of the member div
		container.appendChild(memberDiv); // Add the member div to the container
	});
}

// Call the function to get and display random members when the page loads
getRandomMembers();

/*
	function getSelectedMembers(memberData) {
		// Get a random index from the array
		let sortedData = []; // make array to sort 
		//membership levels
		let selectedMems = [];
		if (memberData.membershipLevel === 3) {
			sortedData.push(memberData); //silver Level
		}
		else if (memberData.membershipLevel === 2) {
			sortedData.push(memberData); //silver Level
		}
		//run number of shoutouts
		for (i = 0; i < numberShoutOuts; i++) {
			const randomIndex = Math.floor(Math.random() * sortedData.length);
			// Select the random membership level
			const randomMember = sortedData[randomIndex];
			sortedData.splice(randomIndex, randomIndex);//pull out member selected
			selectedMems.push(randomMember);
		}
		return selectedMems;
	}

	function renderMembGrid(data) {
		dataContainer.innerHTML = ''; // Clear previous content
		const gridContainer = document.createElement('div');
		gridContainer.classList.add('shout-container');
		data.forEach(member => {
			const gridItem = document.createElement('div');

			gridItem.innerHTML = `
				<h2 class='busName'>${member.businessName}</h2>
				<p>member.buinessType</p>
				<p>${member.imageName}</p>

				<p class='caption'> ${member.caption}</p>
				<p class='address'> ${member.street}</p>
				<p class='address'> ${member.city}, ${member.state} ${member.zipcode}</p>
		
				<p class="phone">${member.phoneNumber}</p>
				<p class="email">${member.email}</p>
				<p>Contact: ${contactName}</p>
				<p class='url'>${member.webUrl}</p> `;

			gridContainer.appendChild(gridItem);
		});
		dataContainer.appendChild(gridContainer);
	}

	fetchMemberData();
});*/
