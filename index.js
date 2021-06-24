require('dotenv').config();             // enviroment variable

const express = require('express');
const app = express();
var bodyParser = require('body-parser')                  //use multy instead
var cors = require('cors');
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')              
var userRoute = require('./routes/user.route')
var authRoute = require('./routes/auth.route')
var prodRoute = require('./routes/prod.route')
var apiProdRoute = require('./api/route/product.route')

const port =3000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB success')
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(cors());
app.use(bodyParser.json())                               //use multy instead
app.use(bodyParser.urlencoded({ extended: true }))       //use multy instead

app.use(cookieParser(process.env.SESSION_SERECT)) // use env

app.get('/' , function(req, res){
    res.render('index.pug', {
        name : 'Get start'
    })
}); 

app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/products', prodRoute)
app.use(express.static('public'))
app.use('/api/products', apiProdRoute)

app.listen(port, function() {
    console.log('server listening ' + port);
    console.log('server is running! ');
    console.log('Ctrl + c to stop');
})