import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './../MovieCard/MovieCard';
import './ReviewCard.css';
import config from '../../config';



class ReviewCard extends Component {
    
    
    componentWillReceiveProps(){
    }
    

    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <span><button onClick={this.props.saveMovie}>Delete</button></span>
                <MovieCard name={this.props.name} pic={`https://image.tmdb.org/t/p/w300${this.props.picture}`} desc={this.props.description}/>
                
                <div className="buttons">
                <select name="rating" size='1' onSelect={console.log()}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <span><button onClick={this.props.randomMovie} >Update</button></span>
                </div>
                
            </div>
        );
    }
}

export default ReviewCard;