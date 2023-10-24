document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");

    button.addEventListener("click", async () => {
        const city = document.getElementById("city").value;
        if (!city) {
            weather.innerHTML = `Please enter a city`;
            return;
        }

        try {
            const { latitude, longitude } = await getCoordinatesForCity(city);
            const { temperature, windspeed } = await getWeatherForCoordinates(latitude, longitude);
            const weather = document.getElementById("weather");
            weather.innerHTML = `
                <p>Temperature: ${temperature} C</p>
                <p>Wind speed: ${windspeed} m/s</p>
            `;
        } catch (error) {
            console.error(error);
            weather.innerHTML = `Error: ${error.message}`;
        }
    });
});

const geoCache = {};

const getCoordinatesForCity = async (city) => {
    if (geoCache[city]) {
        return geoCache[city];
    }

    const geoApiKey = "e0c7032739c34f78b2a6fad81d056fbf";
    const geoApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geoApiKey}`;

    const geoResponse = await fetch(geoApiUrl);
    if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        if (geoData.results.length === 0) {
            throw new Error("City not found");
        }
        const { lat: latitude, lng: longitude } = geoData.results[0].geometry;
        geoCache[city] = { latitude, longitude };
        return { latitude, longitude };
    } else {
        throw new Error("Error accessing geolocation API");
    }
}

const getWeatherForCoordinates = async (latitude, longitude) => {
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,windspeed_10m`;
    const weatherResponse = await fetch(weatherApiUrl);
    if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        const { temperature_2m: temperature, windspeed_10m: windspeed} = weatherData.current;
        return { temperature, windspeed };
    } else {
        throw new Error("Error accessing weather API");
    }
}