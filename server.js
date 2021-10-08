const express = require('express');
const { parks } = require('./data/parks.json')

const app = express();

function filterByQuery(query, resultsArr) {
    let filteredResults = resultsArr;
    if (query.id) {
        filteredResults = filteredResults.filter(park => park.id === query.id);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(park => park.name === query.name);
    }
    if (query.location) {
        filteredResults = filteredResults.filter(park => park.location === query.location);
        console.log('function called');
    }
   return filteredResults;
}

app.get('/api/parks', (req,res) => {
    let results = parks;
    if (req.query) {
        results = filterByQuery(req.query, results);
        console.log(req.query);
    }
    res.json(parks);
})


app.listen(3006, () =>{
    console.log('API server listening on Port 3006');
})