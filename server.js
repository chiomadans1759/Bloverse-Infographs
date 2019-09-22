const express = require('express')
const app = express()

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res){
res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8080;

app.listen(port)

console.log('Listening to port on' + port)