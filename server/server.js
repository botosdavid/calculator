const express = require('express');
const app = express();
const cors = require('cors');  
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req,res) => {
    res.json({message: 'Working!'});
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})