const request = require('request');

// const geocode = (address, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamdhYml0dG8iLCJhIjoiY2p3Y2h4bTJsMHZtZDN5bGpiYTdva3d5NSJ9.Z5GQum8IaFxKgespqOQb8g&limit=1`;

//     request({ url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!');
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.');
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             });
//         }
//     })
//     console.log('Hello');
// }

const geocode = (address, callback) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamdhYml0dG8iLCJhIjoiY2p3Y2h4bTJsMHZtZDN5bGpiYTdva3d5NSJ9.Z5GQum8IaFxKgespqOQb8g&limit=1`;
    
        request({ url, json: true}, (error, { body }) => {
            // const { body: 
            //     { features: 
            //         [
            //             {
            //                 place_name,
            //                  center: [
            //                     latitude,
            //                     longitude
            //                 ]
            //             }
            //         ] 
            //     } 
            // } = response;

            if (error) {
                callback('Unable to connect to location services!');
            } else if (body.features.length === 0) {
                callback('Unable to find location. Try another search.');
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[0],
                    longitude: body.features[0].center[1],
                    location: body.features[0].place_name
                });
            }
        })
        console.log('Hello');
    }

module.exports = geocode;