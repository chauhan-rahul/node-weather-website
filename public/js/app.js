console.log('client side js file loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=> {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

 
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#p1')
const msg2 = document.querySelector('#p2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('testing');
    const location  = search.value

            msg1.textContent = 'loading...'
            msg2.textContent = ''
    fetch('/weather?address=' + encodeURI(location)).then((response)=> {
    response.json().then((data) => {
        if(data.error){
            msg1.textContent = data.error
        } else {
            msg1.textContent = data.location
            msg2.textContent = data.forcast
        }

    })
})
    
})

