var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    console.log(req.query)
    res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', (req, res) => {
    var data = {age: 21, name: req.params.name, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {data: data});
});

app.listen(3000);