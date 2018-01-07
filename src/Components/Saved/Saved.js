import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ReviewCard from '../ReviewCard/ReviewCard'
import  './Saved.css'
class Saved extends Component {
    constructor(props){
        super(props);
        this.state={
            saved:props.saved

        }
    }
    render() {
        console.log(this.props)
      /*  let savedMovies= this.state.saved.map((movie,index)=>{
            return(
                <div>
                    <ReviewCard/>
                </div>
            ) 
        })*/
        return (
            <div>
                <h2>Your Saved Movies</h2>
                <div className='savedMovies'>
                    {this.props.savedMovies.map((x,i)=> {
                        console.log(x)
                        return(<ReviewCard key={i} name={x.name} identifier={x.id} description={x.description} picture={x.picture} deleteMovie={(index)=>{this.props.deleteMovie(index)}}/>)
                    })}
                    
            
                    

                    
                </div>
                
            </div>
        );
    }
}

export default Saved;