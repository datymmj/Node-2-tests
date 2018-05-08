const express = require('express');

const port = process.env.PORT || 3000;
var server = express();
server.get('/',(req,res) => {
    res.send('Hello User!!! How are you!');
});

server.listen(port);