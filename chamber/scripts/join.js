const levelBenefits = [
	["2 FREE Breakfast with Partners", "25% Discount on all events", "Mentorship Program"], //GOLD
	["1 FREE Breakfast with Partners", "10%  Discount on all events", "Chance to win a large COMMUNITY PACKAGE"], //silver
	["5% Discount on all events", "Chance to win a small COMMUNITY PACKAGE"],//bronze
	["Non-Profit rate for all events", "Free classes*"] //nonprofit
];
let index = 3;




document.addEventListener('DOMContentLoaded', function () {
	// Get the hidden input field
	const timestampInput = document.getElementById('submissionTimestamp');

	// Get the current date and time
	const now = new Date();

	if (timestampInput) {
		timestampInput.value = new Date().toISOString(); // ISO 8601 format
	}

	const myInfo = new URLSearchParams(window.location.search);

	document.querySelector('#thanks').innerHTML = `
<div class="greet">
<p></p> 
<h2 class='welcomehead'>Congratulations!!   ${myInfo.get('org-title')}  ${myInfo.get('firstname')}  ${myInfo.get('lastname')} of ${myInfo.get('organization')}<h2>

<h3>You have joined at the ${myInfo.get('membershipLevel')} level</h3><p></p>
<p></p>
<p>All new members get a free Breakfast with Partners</p>
</div>
<p></p>

<p>Check your email: ${myInfo.get('email')} for further Data</p>
<p> Your mobile number is ${myInfo.get('phone')}</p>
<p>Your join date is ${myInfo.get('submissionTimestamp')} </p`;
	console.log(myInfo);
});


document.addEventListener('DOMContentLoaded', () => {
	const membershipCardsContainer = document.querySelector('.membership-cards-container');
	const membershipModal = document.getElementById('membership-modal');
	const selectedLevelSpan = document.getElementById('selected-level');
	const modalDescriptionP = document.getElementById('modal-description');
	const closeButton = document.querySelector('.close-button');
	const confirmButton = document.querySelector('.modal-confirm-button');


	membershipCardsContainer.addEventListener('click', (event) => {
		if (event.target.classList.contains('select-level-button')) {
			const level = event.target.dataset.level;
			//	const description = event.target.closest('.membership-card').querySelector('p').textContent;
			if (level === "GOLD") {
				index = 0;
			}
			else if (level === "SILVER") {
				index = 1;
			}
			else if (level === "BRONZE") {
				index = 3;
			};

			const description = outBenefits(levelBenefits, index);
			selectedLevelSpan.textContent = level;
			membershipModal.classList.add('show'); // Show the modal with fade-in effect
		}
	});

	closeButton.addEventListener('click', () => {
		membershipModal.classList.remove('show'); // Hide the modal with fade-out effect
	});

	confirmButton.addEventListener('click', () => {
		//	alert(`You selected the ${selectedLevelSpan.textContent} membership!`);
		membershipModal.classList.remove('show');
	});

	window.addEventListener('click', (event) => {
		if (event.target === membershipModal) {
			membershipModal.classList.remove('show'); // Hide the modal if clicked outside
		}
	});

	function outBenefits(nestedArray, index) {

		const innerArray = nestedArray[index];

		const outputContainer = document.getElementById("modal-description");
		outputContainer.innerHTML = " ";

		//levelBenefits.forEach(innerArray => {
		innerArray.forEach(item => {
			const p = document.createElement("p"); // Create a paragraph element for each item
			p.textContent = item; // Set its text content
			outputContainer.appendChild(p); // Append it to the container
		});
	}
	const organizationInput = document.getElementById('org-title');
	organizationInput.addEventListener('input', () => {
		if (organizationInput.value.length < 7) {
			// Display an error message or style the input
			organizationInput.style.borderColor = 'red';
		} else {
			organizationInput.style.borderColor = 'green';
		}
	});

});



