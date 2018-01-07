import React, { Component } from 'react';
import './MovieCard.css';
class MovieCard extends Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(){
    }
    render() {
        return (
            <div className='cardContainer'>
                <div className="pic">
                    <img src={this.props.pic} alt=""/>
                </div>
                <h2>{this.props.name}</h2>
                <p>{this.props.rating}</p>
                <p>{this.props.desc}</p>
                
            </div>
        );
    }
}

export default MovieCard;