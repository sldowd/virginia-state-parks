const express = require('express');
const { parks } = require('./data/parks.json')

const app = express();

app.get('/api/parks', (req,res) => {
    res.json(parks);
})


app.listen(3001, () =>{
    console.log('API server listening on Port 3001');
})