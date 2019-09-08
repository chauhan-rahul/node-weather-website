
const request = require('request')


const forecast  = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/16e5931c1b3029c02b65da47aaeb0f83/' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '?units=us'
    console.log(url)

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback(undefined, 'Unable to connect')
        } else if (body.error) {
            callback(undefined,'Unable to find address')
        } else {
            const currently = body.currently
            callback(undefined, 'It is currently ' + currently.temperature + ' degrees out. there is a ' + currently.precipProbability + '% chance of rain ' )
        }
    })

}

module.exports = forecast

