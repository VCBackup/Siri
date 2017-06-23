var needExpress = require('express');

var app = needExpress();

app.listen(8887, function(){ console.log('It\'s working!!!')});

var messages = ['Hyello', 'What do you want?', 'An ornament... A knick-knack.', 'DON\'T TEMPT ME!', 'I have nothing more thing to say!', 'How many times are you gonna push that button?', 'I don\'t have time for this...', 'Leave me alooooone....', 'What you doing?', 'More work?', 'Da boo.', 'Lok\'tar.', 'Swoboo', 'Heeheeeeheeheee, that tickles!'];

var getRandomMessage = function(){
   return messages[Math.floor(Math.random() * messages.length)];;
}

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});