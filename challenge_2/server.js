const express = require('express');
const multer = require('multer');
const app = express()
const port = 3001

app.use(express.static('client'));

app.use(multer({dest:'./upload_json/'});)
app.post('/upload_json', (req, res) => res.send('post request to homepage'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

