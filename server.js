var needExpress = require('express');

var app = needExpress();

app.listen(8887, function(){ console.log('It\'s working!!!')});

var messages = ['Hyello', 'What do you want?', 'An ornament... A knick-knack.', 'DON\'T TEMPT ME!', 'One more thing to say!'];

app.get('/', function(req, res){
    res.send(JSON.stringify({
        message: getRandomMessage()
    }))
});