const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

//const baseURL = '/api/movies'
const port = process.env.PORT || 3002;
const movieManager = require('./controllers/movieManager');
const config = require('../config')
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`


app.use(bodyParser.json());

app.get("/api/movies", (req,res)=>{
    axios.get(url)
    .then(response=>{
        return res.send(response.data);
    }).catch(console.log)})

app.listen(port, ()=>console.log(`the server is browsing memes on port ${port}`));