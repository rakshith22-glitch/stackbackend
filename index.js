const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));


let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);
console.log(student);


app.get('/data', (req, res) => res.send(student));