import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './../MovieCard/MovieCard';
import './ReviewCard.css';
import config from '../../config';



class ReviewCard extends Component {
    
    
    componentWillReceiveProps(){
    }
    

    render() {
        
        return (
            <div className='container'>
                <span>
                    <button onClick={() => {this.props.deleteMovie(this.props.identifier)}}>
                        Delete
                    </button>
                </span>
                <MovieCard rating={this.props.rating} name={this.props.name} pic={`https://image.tmdb.org/t/p/w300${this.props.picture}`} desc={this.props.description}/>
                
                <div className="buttons">
                <select name="rating" size='1' onChange={
                    (e)=>{this.props.addReview(e,this.props.identifier)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <span><button onClick={this.props.addReview} >Update</button></span>
                </div>
                
            </div>
        );
    }
}

export default ReviewCard;