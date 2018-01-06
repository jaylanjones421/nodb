import React, { Component } from 'react';
import './MovieCard.css';
class MovieCard extends Component {

    render() {
        return (
            <div className='cardContainer'>
                <div className="pic">
                    <img src="" alt=""/>
                </div>
                <h2>Title</h2>
                <p>description</p>
                
            </div>
        );
    }
}

export default MovieCard;