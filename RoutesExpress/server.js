var express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.prependListener('index.ejs');
})



/*
app.use(logger)

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page');
})

app.get('/users', auth, (req, res) => {
    console.log('Users Page')
    res.send('Users Page');
})

function logger(req, res, next){
    console.log("You've logged");
    next();
}

function auth(req, res, next) {
    if(req.query.admin === "true"){
        next()
    }
    else{
        res.send('No Auth!')
    }

    console.log("You've authenticated");
    next();
}
*/

app.listen(3000);