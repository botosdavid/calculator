const express = require('express');
const cors = require('cors');  
const fs = require('fs');
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req,res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) return console.error(err);
        res.json({message: data});
    });
})

app.post('/', (req,res) => {
    fs.writeFile("data.txt", "10", (err) => {
        if(err) return console.log(err);
    });
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})