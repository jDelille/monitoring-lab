const express = require('express');
const path = require('path');

const app = express();
app.use(express.json())

app.use(express.static("client"));

//ROLLBAR - - - - - - - - 
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '466fd71534f043ca8b9e8d9d6898602f',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


//ARRAY STUFF - - - - - - - - 
const niceThings = ['you are cool', 'you are a savage', 'you are a beast']

app.get('/api/compliments', (req, res) => {
   let compliments =  Math.floor(Math.random() * niceThings.length)
   console.log(compliments)
   res.status(200).send(niceThings[compliments]);
   rollbar.log('Student successfully added!')
})

//heroku port 
const PORT = process.env.PORT || 4000

app.use(rollbar.errorHandler())

app.listen(PORT, () => console.log(`Avengers... Assemble on port: ${PORT}`));