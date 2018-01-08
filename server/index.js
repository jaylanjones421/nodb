const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const baseURL = '/api/movies'
const port = process.env.PORT || 3002;
const movieManager = require('./controllers/movieManager');
const config = require('../src/config')
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.privateKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;


app.use(bodyParser.json());

app.get(baseURL, (req,res)=>{
    axios.get(url)
    .then(response=>{
        return res.send(response.data);
    })
})
app.post(`${baseURL}/saved`,movieManager.addMovie);
app.delete(`${baseURL}/delete/:id`,movieManager.deleteMovie);
app.put(`${baseURL}/rating`,movieManager.updateRating);


app.listen(port, ()=>console.log(`Port ${port} says asuuhhhhhh duuuuuuuuhh`));