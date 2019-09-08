const path = require('path')
const express = require('express')
const hbs = require('hbs')
const createRoutes = require('./routes')
const forcast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const port = process.env.PORT || 3000

const app = express()

//Path
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Rahul'
    })
})

createRoutes(app)

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error:'kindly send the address'})
    }

    geocode(req.query.address, (error, {longitute, latitude, placeName:location} = {}) =>{
        if(error){
            res.send({
                error: error
            })
        } else {
            forcast(longitute, latitude, (error,forecastdata) =>{
                res.send({
                    forcast: forecastdata,
                    location: location
                })
            })
        }
    })

})

app.get('/*', (req,res) => {
    res.render('404', {
        title: 'About',
        name: 'Rahul'
    })
})  
    
app.listen(port,() => {
    console.log('Server is up on port:' + port)
})