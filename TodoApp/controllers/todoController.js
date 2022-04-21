var bodyParser = require('body-parser');

var data = [{item: 'Get milk'}, {item: 'Walk dog'}, {item: 'Kick som coding ass'}];

module.exports = function(app){

    var urlEncodedParser = bodyParser.urlencoded({ extended: true });

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlEncodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data);
    });
}