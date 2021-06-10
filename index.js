const express = require('express');
const app = express();
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route')

const port =3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' , function(req, res){
    res.render('index', {
        name : 'Get start'
    })
});

app.use('/users', userRoute)

app.use(express.static('public'))

app.listen(port, function() {
    console.log('server listening ' + port);
    console.log('server is running! ');
    console.log('Ctrl + c to stop');
})