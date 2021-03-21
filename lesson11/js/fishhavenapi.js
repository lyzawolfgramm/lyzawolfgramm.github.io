const apiURL =
  "https://api.openweathermap.org/data/2.5/weather/?id=5604473&appid=eeaefb0b7081d79b5150b40714f6ff32&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.weather[0].main +' '+jsObject.main.temp.toFixed(0);
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('low').textContent = jsObject.main.temp_min.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

    //Wind Chill
    let temper = parseFloat(jsObject.main.temp);
    let windSpeed = parseFloat(jsObject.wind.speed);
    let windChill = calc(temper, windSpeed);
    function calc(x, y) {
      let result = 35.74 + (0.6215 * x) - (35.75 * Math.pow(y, 0.16)) + (0.4275 * x * Math.pow(y, 0.16));
      return result.toFixed(0);
    }
    let answer = (temper <= 50 && windSpeed > 3) ? `${windChill} °C` : 'N/A';
    document.getElementById('chill').textContent = answer;
  });