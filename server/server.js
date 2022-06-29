const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');  
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) return console.error(err);
        res.json({message: data});
    });
})

app.post('/', (req,res) => {
    fs.writeFile("data.txt", req.body.message.toString(), (err) => {
        if(err) return console.log(err);
    });
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})