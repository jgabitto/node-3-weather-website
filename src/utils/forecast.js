const request = require('request');

// const forecast = (latitude, longitude, callback) => {
//     const url1 = `https://api.darksky.net/forecast/bbbf762c3cf87c14011713efb9bd83f6/${longitude},${latitude}`;

//     request({ url: url1, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service', undefined);
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined);
//         } else {
//             callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability * 100}% chance of rain.`)
//         }
//     })
// }

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/bbbf762c3cf87c14011713efb9bd83f6/${longitude},${latitude}`;

    request({ url, json: true }, (error, { body }) => {
        // const {
        //     body: {
        //         error: bodyError,
        //         currently: {
        //             temperature,
        //             precipProbability
        //         },
        //         daily: {
        //             data: [
        //                 {
        //                     summary
        //                 }
        //             ]
        //         }
        //     }
        // } = response;

        if (error) {
            callback('Unable to connect to weather service', undefined);
            } else if (body.error) {
                callback('Unable to find location', undefined);
            } else {
                callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100}% chance of rain.`);
            }
        })
}

module.exports = forecast;