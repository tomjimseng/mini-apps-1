const express = require('express');
const app = express()
const port = 3001

app.use(express.static('client'));
app.post('/upload_json', (req, res) => res.send(req.body));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

