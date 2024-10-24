const express = require('express')
var bodyParser = require('body-parser')
// require('./models/index') // define model in models folder
// const User = require('./models/user')
// const Contect = require('./models/contect')
require('./models')

const app = express()

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})

//User.sync({ force: true }); // SELECT TABAL FROM DATABASE
//Contect.sync({ force: true }); // SELECT TABAL FROM DATABASE
//User.drop();



app.listen(3000,()=>{    
    console.log('App will run on : http://localhost:3000')
})



