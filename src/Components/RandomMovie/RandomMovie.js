import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './../MovieCard/MovieCard';
import './RandomMovie.css';
import config from '../../config';



class RandomMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            original_title:props.originalTitle,
            overview:props.overview,
            backdrop_path:`https://image.tmdb.org/t/p/w300${props.backdropPath}`
        }
    }

    render() {
        return (
            <div className='container'>
                <MovieCard name={this.props.originalTitle} pic={`https://image.tmdb.org/t/p/w300${this.props.picture}`} desc={this.props.overview}/>
                
                <div className="buttons">
                <span><button onClick={() => this.props.save({...this.props})}>Save</button></span>
                <span><button onClick={this.props.randomMovie} >Next</button></span>
                </div>
                
            </div>
        );
    }
}

export default RandomMovie;