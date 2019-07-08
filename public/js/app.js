const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locationDisplay = document.getElementById('lead1');
const forecastDisplay = document.getElementById('lead2');
const insertCity = document.getElementById('insertCity');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            forecastDisplay.innerHTML = data.error;
        } else {
            insertCity.innerHTML = location;
            locationDisplay.innerHTML = data.location;
            forecastDisplay.innerHTML = data.forecastData;
        }
        
    })
})
})


//
// fetch('https://api.darksky.net/forecast/bbbf762c3cf87c14011713efb9bd83f6/29.76328,-95.36327').then((response) => {
//     response.json().then((data) => {
//         console.log(data);

//         // geocode('Houston', (error, {latitude, longitude, location}) => {
//         //     forecast(latitude, longitude, (error, forecastData) => {
//         //         if (error) {
//         //             console.log(error);
//         //         } else {
//         //             console.log(location);
//         //             console.log(forecastData);
//         //         }
//         //     })
//     })
// })

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/$houston.json?access_token=pk.eyJ1IjoiamdhYml0dG8iLCJhIjoiY2p3Y2h4bTJsMHZtZDN5bGpiYTdva3d5NSJ9.Z5GQum8IaFxKgespqOQb8g&limit=1').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// });