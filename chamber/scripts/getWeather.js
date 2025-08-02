const apiKey = "a7f5a9200d42f3f0967a79840b5b335e"; // Replace with your OpenWeatherMap API key
const cityName = "boise"; // Replace with the city you want to fetch data for
const lat = "43.61";
const long = "-116.20";
const units = "imperial";
const numDaysData = 4; //number of forcast today + ?
const forcastWeatherData = [];//load 

const baseURL = '//api.openweathermap.org/data/2.5/forcast';

const varURL = '//api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${apiKey}';


const currentTemp = document.querySelector('#temperature');
const weathcity = document.querySelector('#city');
const description = document.querySelector('#description');
const currentAsOf = document.querySelector('#dateTime');
const weatherIcon = document.querySelector('#weatherIcon');
const captionText = document.querySelector('figcaption');
const weathIconImg = document.querySelector('.icon img');
const sunriseTm = document.querySelector('#sunrise');
const sunsetTm = document.querySelector('#sunset');
const highTempDiv = document.querySelector('#highTempDiv');
const lowTempDiv = document.querySelector('#lowTempDiv');

const frcstDateIndices = [8, 16, 24];
//data.list 0 = first day
//data.list 8 = day 2
//data.list 16 = day 3
//data.list 24 = day 4
/*************zero*************/
const currentTempf = document.querySelector('#temperaturef');
const descriptionf = document.querySelector('#descriptionf');
const forcastDateTime = document.querySelector('#dateTimef');
const weatherIconf = document.querySelector('#weatherIconf');
const captionTextf = document.querySelector('figcaptionf');


const highTempDivf = document.querySelector('#highTempDivf');
const lowTempDivf = document.querySelector('#lowTempDivf');

/*************one*************/
const currentTempf1 = document.querySelector('#temperaturef1');
const descriptionf1 = document.querySelector('#descriptionf1');
const forcastDateTime1 = document.querySelector('#dateTimef1');
const weatherIconf1 = document.querySelector('#weatherIconf1');
const captionTextf1 = document.querySelector('figcaptionf1');
//const sunriseTmf = document.querySelector('#sunrisef');
//const sunsetTmf = document.querySelector('#sunsetf');
const highTempDivf1 = document.querySelector('#highTempDivf1');
const lowTempDivf1 = document.querySelector('#lowTempDivf1');

/*************two*************/
const currentTempf2 = document.querySelector('#temperaturef2');
const descriptionf2 = document.querySelector('#descriptionf2');
const forcastDateTime2 = document.querySelector('#dateTimef2');
const weatherIconf2 = document.querySelector('#weatherIconf2');
const captionTextf2 = document.querySelector('figcaptionf2');
//const sunriseTmf = document.querySelector('#sunrisef');
//const sunsetTmf = document.querySelector('#sunsetf');
const highTempDivf2 = document.querySelector('#highTempDivf2');
const lowTempDivf2 = document.querySelector('#lowTempDivf2');

async function getWeatherData() {
	try {
		// Construct the API URL
		const apiURL = '//api.openweathermap.org/data/2.5/forecast?q=boise&units=imperial&appid=a7f5a9200d42f3f0967a79840b5b335e';

		// Make the fetch request
		const response = await fetch(apiURL);

		// Check if the request was successful (status code 200-299)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Parse the JSON response
		const weatherData = await response.json();
		//console.log(weatherData);
		//	forcastWeatherData.push(weatherData.city); //data array for forcasts
		for (let i = 0; i < frcstDateIndices.length; i++) {
			forcastWeatherData.push(weatherData.list[frcstDateIndices[i]]);
		};

		//console.log(forcastWeatherData);

		displayCurrentResults(weatherData);
		displayForcastResults(forcastWeatherData);

	} catch (error) {
		console.error('Error fetching weather data:', error.message);
		// Handle the error (e.g., display an error message to the user)
	}
}
/******************CURRENT DATA**************/
function displayCurrentResults(data) {

	//console.log(data);
	const theDescription = data.list[0].weather[0].description;
	const theCity = data.city.name;
	const highTemp = data.list[0].main.temp_max;
	const lowTemp = data.list[0].main.temp_min;
	const sunrise = data.city.sunrise;
	const sunset = data.city.sunset;
	const sunriseMtn = convertEpochToMountainTime(sunrise);
	const sunsetMtn = convertEpochToMountainTime(sunset);

	//loop through three days 
	const epochDateTime = data.list[0].dt;
	const mountainTime = convertEpochToMountainTime(epochDateTime);
	const theTemperature = data.list[0].main.temp;

	const weatherIconCd = data.list[0].weather[0].icon;
	const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCd}@2x.png`; // @2x for higher resolution
	weatherIcon.setAttribute('SRC', iconUrl);
	weatherIcon.setAttribute('alt', theDescription);
	weatherIcon.setAttribute('width', '50px');
	weatherIcon.setAttribute('height', '50px');

	currentTemp.innerHTML = theTemperature;
	weathcity.innerHTML = theCity;
	description.innerHTML = theDescription;
	currentAsOf.innerHTML = mountainTime;
	sunriseTm.innerHTML = sunriseMtn;
	sunsetTm.innerHTML = sunsetMtn;
	highTempDiv.innerHTML = highTemp;
	lowTempDiv.innerHTML = lowTemp;


}
/*****BruteforceWeather****************/
function displayForcastResults(data) {

	/*****************zero***************/
	const theDescriptionf = data[0].weather[0].description;
	const theTemperaturef = data[0].main.temp;
	const highTempf = data[0].main.temp_max;
	const lowTempf = data[0].main.temp_min;
	const epochDateTimef = data[0].dt;
	const mountainTimef = convertEpochToMountainTime(epochDateTimef);

	const weatherIconCdf = data[0].weather[0].icon;
	const iconUrlf = `https://openweathermap.org/img/wn/${weatherIconCdf}@2x.png`; // @2x for higher resolution
	weatherIconf.setAttribute('SRC', iconUrlf);
	weatherIconf.setAttribute('alt', theDescriptionf);

	descriptionf.innerHTML = theDescriptionf;
	currentTempf.innerHTML = theTemperaturef;
	forcastDateTime.innerHTML = mountainTimef;
	highTempDivf.innerHTML = highTempf;
	lowTempDivf.innerHTML = lowTempf;

	/*****************one***************/
	const theDescriptionf1 = data[1].weather[0].description;
	const theTemperaturef1 = data[1].main.temp;
	const highTempf1 = data[1].main.temp_max;
	const lowTempf1 = data[1].main.temp_min;
	const epochDateTimef1 = data[1].dt;
	const mountainTimef1 = convertEpochToMountainTime(epochDateTimef1);

	const weatherIconCdf1 = data[1].weather[0].icon;
	const iconUrlf1 = `https://openweathermap.org/img/wn/${weatherIconCdf}@2x.png`; // @2x for higher resolution
	weatherIconf1.setAttribute('SRC', iconUrlf1);
	weatherIconf1.setAttribute('alt', theDescriptionf1);

	descriptionf1.innerHTML = theDescriptionf1;
	currentTempf1.innerHTML = theTemperaturef1;
	forcastDateTime1.innerHTML = mountainTimef1;
	highTempDivf1.innerHTML = highTempf1;
	lowTempDivf1.innerHTML = lowTempf1;

	/*****************two***************/
	const theDescriptionf2 = data[2].weather[0].description;
	const theTemperaturef2 = data[2].main.temp;
	const highTempf2 = data[2].main.temp_max;
	const lowTempf2 = data[2].main.temp_min;
	const epochDateTimef2 = data[2].dt;
	const mountainTimef2 = convertEpochToMountainTime(epochDateTimef2);

	const weatherIconCdf2 = data[2].weather[0].icon;
	const iconUrlf2 = `https://openweathermap.org/img/wn/${weatherIconCdf}@2x.png`; // @2x for higher resolution
	weatherIconf2.setAttribute('SRC', iconUrlf2);
	weatherIconf2.setAttribute('alt', theDescriptionf2);

	descriptionf2.innerHTML = theDescriptionf2;
	currentTempf2.innerHTML = theTemperaturef2;
	forcastDateTime2.innerHTML = mountainTimef2;
	highTempDivf2.innerHTML = highTempf2;
	lowTempDivf2.innerHTML = lowTempf2;
}
/*
function displayForcastResultstry(forcastDataArry) {
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productName = document.createElement('h2');
	productName.textContent = product.name;

	const productDescription = document.createElement('p');
	productDescription.textContent = product.description;

	const productImage = document.createElement('img');
	productImage.src = product.imageUrl;
	productImage.alt = product.name;

	productCard.appendChild(productName);
	productCard.appendChild(productDescription);
	productCard.appendChild(productImage);

	container.appendChild(productCard);

	console.log(data);
	const theDescription = data[0].description;
	description.innerHTML = theDescription;
*/

/*
	const theCity = data.city.name;

	const theTemperature = data.list[0].main.temp;
	const highTemp = data.list[0].main.temp_max;
	const lowTemp = data.list[0].main.temp_min;
	const epochDateTime = data.list[0].dt;
	const mountainTime = convertEpochToMountainTime(epochDateTime);
	const sunrise = data.city.sunrise;
	const sunset = data.city.sunset;
	const sunriseMtn = convertEpochToMountainTime(sunrise);
	const sunsetMtn = convertEpochToMountainTime(sunset);
	const weatherIconCd = data.list[0].weather[0].icon;
	const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCd}@2x.png`; // @2x for higher resolution
	console.log(iconUrl);
	weatherIcon.setAttribute('SRC', iconUrl);
	weatherIcon.setAttribute('alt', theDescription);

	currentTemp.innerHTML = theTemperature;
	weathcity.innerHTML = theCity;
	currentAsOf.innerHTML = mountainTime;
	sunriseTm.innerHTML = sunriseMtn;
	sunsetTm.innerHTML = sunsetMtn;
	highTempDiv.innerHTML = highTemp;
	lowTempDiv.innerHTML = lowTemp;
*/

function convertEpochToMountainTime(epochTimestamp) {
	// JavaScript Date objects work with milliseconds, so multiply by 1000 if the epoch is in seconds.
	const date = new Date(epochTimestamp * 1000);

	// Define options for formatting, specifying the Mountain Time timezone.
	// 'America/Denver' is a common IANA timezone identifier for Mountain Time.
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short', // Displays 'MDT' or 'MST'
		timeZone: 'America/Denver'
	};

	// Create a DateTimeFormat instance for the desired locale and options.
	const formatter = new Intl.DateTimeFormat('en-US', options);

	// Format the date into a human-readable string in Mountain Time.
	return formatter.format(date);
}

// Call the function to get weather data
getWeatherData();



