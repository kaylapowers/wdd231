import cadetPics from "./cadetPics.js"


const data = cadetPics;
displayItems(data);

function isIndexEven(index) {
	return index % 2 === 0;
}

function displayItems(data) {

	const gridContainer = document.getElementById('info-container1');
	const gridItem = document.createElement('h2');
	gridItem.classList.add('info-h2')
	for (let i = 0; i < data.length; i++) {

		const gridItem = document.createElement('div');
		let cardname;
		if (isIndexEven(i)) {
			cardname = "image-cardL";
		} else {
			cardname = "image-cardR";
		}

		gridItem.classList.add(cardname);
		gridItem.innerHTML = `
		
			<figure><figcaption class="thecaption"><h2>${data[i].title}</h2></figcaption><img class='display-image' src='images/${data[i].src}' alt='${data[i].name}' width=${data[i].width} height=${data[i].height} loading=${data[i].load}></figure></div>

			<p class='info-description'>${data[i].description}</p>
		`;

		const buttonElement = document.createElement('button');
		buttonElement.classList.add('pretty-button');

		buttonElement.textContent = 'LEARN MORE';
		// Use a valid URL property from your data, e.g., data[i].url
		buttonElement.onclick = function () {
			if (data[i].url) {
				window.location.href = "./information.html";
			} else {
				alert('No URL available for this item.');
			}
		};
		gridItem.appendChild(buttonElement);
		gridContainer.appendChild(gridItem);
	}
};

document.addEventListener('DOMContentLoaded', displayItems);
