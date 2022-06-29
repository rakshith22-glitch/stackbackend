const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const cors = require("cors");
app.get('/', (req, res) => res.send('Hello Thanks for coming here!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use(cors({
    origin: "*",
}));

// const whitelist = [
//     "http://localhost:3000",
//     "http://localhost:3001",
//     "https://stacklinebackend.herokuapp.com",
//     "https://stacklinedemo.herokuapp.com/",
//   ];
//   const corsOptions = {
//     origin: function (origin, callback) {
//       console.log("** Origin of request " + origin);
//       if (whitelist.indexOf(origin) !== -1 || !origin) {
//         console.log("Origin acceptable");
//         callback(null, true);
//       } else {
//         console.log("Origin rejected");
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   };


let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);
console.log(student);


app.get('/data', (req, res) => res.send(student));