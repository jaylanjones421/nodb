import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard'
class Saved extends Component {
    constructor(props){
        super(props);
        this.state={
            saved:props.saved

        }
    }
    render() {
      /*  let savedMovies= this.state.saved.map((movie,index)=>{
            return(
                <div>
                    <button>Remove</button>
                    <MovieCard/>
                    <input type="text" placeholder="rate from 1-5" />
                </div>
            ) 
        })*/
        return (
            <div>
                <h2>Your Saved Movies</h2>
                <div>
                    
                </div>
                
            </div>
        );
    }
}

export default Saved;