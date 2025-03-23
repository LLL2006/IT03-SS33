const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}

function searchWeather() {
    const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();
    const weatherResult = document.getElementById("weatherResult");

    const foundCity = Object.keys(weatherData).find(city => city.toLowerCase() === cityInput);

    if (foundCity) {
        const weather = weatherData[foundCity];
        weatherResult.innerHTML = `
            <h2>${foundCity}</h2>
            <p>${weather.icon} <strong>${weather.temperature}°C</strong></p>
            <p>${weather.description}</p>
            <p>Độ ẩm: ${weather.humidity}%</p>
            <p>Tốc độ gió: ${weather.windSpeed} km/h</p>
        `;
        weatherResult.classList.remove("error");
    } else {
        weatherResult.innerHTML = `<p class="error">Không tìm thấy thông tin thời tiết cho thành phố "${cityInput}".</p>`;
        weatherResult.classList.add("error");
    }
}
