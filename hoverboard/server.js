const express = require('express');
const app = express();


app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/public/scripts.js')
})
app.listen(3000, () => console.log('Server Started at 3000'))