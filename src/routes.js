const createRoutes = (app) =>{
    

    
    app.get('/about', (req,res) => {
        res.render('about', {
            title: 'About',
            name: 'Rahul'
        })
    })
    
    app.get('/help', (req,res) => {
        res.render('help', {
            title: 'Help',
            name: 'Rahul'
        })
    })
    

}

module.exports = createRoutes