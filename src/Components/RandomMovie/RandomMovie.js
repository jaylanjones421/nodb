import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './../MovieCard/MovieCard'
import './RandomMovie.css'



class RandomMovie extends Component {
    constructor(){
        super();
        this.state={
            movieName:'',
            movieImg:'',
        }
    }
    
    componentDidMount(url){
        axios.get()
        .then(res=>{
            console.log(res.results)
        })
    }
    render() {
        return (
            <div className='container'>
                <MovieCard/>
                
                <div className="buttons">
                <span><button>Save</button></span>
                <span><button>Next</button></span>
                </div>
                
            </div>
        );
    }
}

export default RandomMovie;