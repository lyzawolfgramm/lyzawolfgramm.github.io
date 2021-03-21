const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=eeaefb0b7081d79b5150b40714f6ff32';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
	const desc = jsObject.weather[0].description;  // note how we reference the weather array
	document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
	document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
	document.getElementById('icon').setAttribute('alt', desc);
  });