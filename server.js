const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    const data=`<h1><a href ="/hoverboard"> Hoverboard</a>
    <br><a href ="/Tictactoe"> TicTacToe</a></h1>`
    res.send(data)
})

app.get('/Tictactoe', (req, res) => {
    res.sendFile('/public/Tictactoe/home.html')
})
app.get('/Tictactoe/js', (req, res) => {
    res.sendFile('/public/Tictactoe/scripts.js')
})

app.get('/hoverboard', (req, res) => {
    res.sendFile('/public/hoverboard/home.html')
})

app.get('/hoverboard/css', (req, res) => {
    res.sendFile('/public/hoverboard/styles.css')
})

app.get('/hoverboard/js', (req, res) => {
    res.sendFile('/public/hoverboard/scripts.js')
})

app.listen(process.env.PORT || 3000)
app.listen(3000, () => console.log('Server Started at 3000'))