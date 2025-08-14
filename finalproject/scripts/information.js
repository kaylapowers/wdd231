
/***********************modal grade cards*********/


document.addEventListener('DOMContentLoaded', () => {
	const activityGrid = document.getElementById('activityGrid');
	const activityModal = document.getElementById('activityModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalDescription = document.getElementById('modalDescription');
	const modalDetails = document.getElementById('modalDetails');
	const closeButton = document.querySelector('.close-button');

	const activities = [
		{
			id: 1,
			schoolLevel: 'elementary',
			title: 'Story Time Adventure',
			description: 'Engaging stories for young learners.',
			details: 'Interactive storytelling sessions with puppets and props, fostering creativity and imagination. Suitable for ages 5-8.'
		},
		{
			id: 2,
			schoolLevel: 'elementary',
			title: 'Art Exploration',
			description: 'Unleash your inner artist.',
			details: 'Discover various art techniques and create colorful masterpieces. Materials provided. Suitable for ages 6-9.'
		},
		{
			id: 3,
			schoolLevel: 'juniorHigh',
			title: 'Science Experiments',
			description: 'Hands-on scientific investigations.',
			details: 'Explore the wonders of science with exciting experiments and demonstrations. Topics include chemistry, physics, and biology. Suitable for ages 11-14.'
		},
		{
			id: 4,
			schoolLevel: 'juniorHigh',
			title: 'Coding Club',
			description: 'Learn the basics of programming.',
			details: 'Start your coding journey with fun projects and challenges in Python and JavaScript. No prior experience needed. Suitable for ages 12-15.'
		},
		{
			id: 5,
			schoolLevel: 'highSchool',
			title: 'Debate Team',
			description: 'Sharpen your public speaking and critical thinking skills.',
			details: 'Join the debate team to discuss current events, develop argumentation skills, and compete in tournaments. Suitable for ages 15-18.'
		},
		{
			id: 6,
			schoolLevel: 'highSchool',
			title: 'College Prep Workshop',
			description: 'Prepare for your academic future.',
			details: 'Comprehensive workshop covering college applications, essay writing, financial aid, and career exploration. Suitable for ages 16-18.'
		}
	];

	// Function to render activity cards
	const renderCards = () => {
		activityGrid.innerHTML = ''; // Clear existing cards
		activities.forEach(activity => {
			const card = document.createElement('div');
			card.classList.add('card');
			card.dataset.id = activity.id;
			card.innerHTML = `
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
                <small>Level: ${activity.schoolLevel.replace(/([A-Z])/g, ' $1').trim()}</small>
            `;
			activityGrid.appendChild(card);
		});
	};

	// Open modal on card click
	activityGrid.addEventListener('click', (event) => {
		const card = event.target.closest('.card');
		if (card) {
			const activityId = parseInt(card.dataset.id);
			const selectedActivity = activities.find(activity => activity.id === activityId);
			if (selectedActivity) {
				modalTitle.textContent = selectedActivity.title;
				modalDescription.textContent = selectedActivity.description;
				modalDetails.textContent = selectedActivity.details;
				activityModal.style.display = 'block';
				// Set focus to the modal for accessibility
				activityModal.focus();
				activityModal.setAttribute('aria-modal', 'true');
				activityModal.setAttribute('role', 'dialog');
				modalTitle.setAttribute('id', 'modal-title');
				activityModal.setAttribute('aria-labelledby', 'modal-title');
				modalDescription.setAttribute('id', 'modal-description');
				activityModal.setAttribute('aria-describedby', 'modal-description');
			}
		}
	});

	// Close modal
	closeButton.addEventListener('click', () => {
		activityModal.style.display = 'none';
		activityModal.removeAttribute('aria-modal');
		activityModal.removeAttribute('role');
		activityModal.removeAttribute('aria-labelledby');
		activityModal.removeAttribute('aria-describedby');
	});

	// Close modal on outside click
	window.addEventListener('click', (event) => {
		if (event.target === activityModal) {
			activityModal.style.display = 'none';
			activityModal.removeAttribute('aria-modal');
			activityModal.removeAttribute('role');
			activityModal.removeAttribute('aria-labelledby');
			activityModal.removeAttribute('aria-describedby');
		}
	});

	// Initial rendering of cards
	renderCards();
});
/***********************modal grade cards*********/



/***********index.html get more info button****/

const infoBtn = document.getElementById('infoBtn');
if (infoBtn) {
	infoBtn.addEventListener('click', () => {
		window.location.href = "information.html";//URL 
	});
}
/***********index.html get more info button****/

/***********************form data cards*********/

const reqinfoForm = document.getElementById('reqinfo');
if (reqinfoForm) {
	reqinfoForm.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent default form submission

		const timestampInput = document.getElementById('dateRequest');

		// Get the current date and time
		const now = new Date();

		if (timestampInput) {
			timestampInput.value = new Date().toISOString(); // ISO 8601 format
		}

		const myInfo = new URLSearchParams(window.location.search);
		let newsletterText = '';

		const newsletter = myInfo.get('newsletter');
		if (newsletter === 'yes') {
			newsletterText = `<p>You will be receiving our periodic newsletter.</p>`;
		}
		const thanksElement = document.querySelector('#thanks');
		if (thanksElement) {
			thanksElement.innerHTML = `
<div class="greet">
<p></p> 
<h2 class='welcomehead'>${myInfo.get('parentFirst') || ''}  ${myInfo.get('parentLast') || ''} - Thank You for requesting information for your student, ${myInfo.get('studentFirst') || ''} ${myInfo.get('studentLast') || ''}.</h2>
<h3>We believe that your ${myInfo.get('gradeLevel') || ''} student will enjoy the unique opportunities and programs that we offer.  </h3>
<p></p>
<p>Enjoy our Learning Vanguard Breakfast.</p>
</div>
<p></p>
<p>Check your email: ${myInfo.get('email') || ''} for further Data</p>
${newsletterText}
<p> Your mobile number is ${myInfo.get('phone') || ''}</p>
<p>Mark Today,  ${document.getElementById('dateRequest') ? document.getElementById('dateRequest').value : ''} as a great beginning. </p>
			`;
		}
	})};
