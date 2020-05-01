var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '1099201214:AAGT1vNN-YaGsiuCZ1KxnlUq3uDV8IoVakA'
});

api.on('message', (msg) => {
  api.sendMessage(msg.chat.id, 'Ill have the tuna. No crust.');
});
api.on("text", (message) => {
  api.sendMessage(message.chat.id, "Hello world");
});

api.getMe()
.then(function(data)
{
    console.log(data);
})
.catch(function(err)
{
    console.log(err);
});



/*

const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 4000;
const url = 'https://api.telegram.org/bot';
const apiToken = '1099201214:AAGT1vNN-YaGsiuCZ1KxnlUq3uDV8IoVakA';
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post('/', (req, res) => {
     // console.log(req.body);
     const chatId = req.body.message.chat.id;
     const sentMessage = req.body.message.text;
     // Regex for hello
     if (sentMessage.match(/hello/gi)) {
          axios.post(`${url}${apiToken}/sendMessage`,
               {
                    chat_id: chatId,
                    text: 'hello back 👋'
               })
               .then((response) => { 
                    res.status(200).send(response);
               }).catch((error) => {
                    res.send(error);
               });
     } else {
          // if no hello present, just respond with 200 
          res.status(200).send({});
     }
});
// Listening
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});

*/