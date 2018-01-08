import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Saved from './Components/Saved/Saved';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      about: null,
      saved: null,
      savedMovies:[]
    }
    this.deleteMovie=this.deleteMovie.bind(this);
    this.saveMovie=this.saveMovie.bind(this);
    this.changeViewHome=this.changeViewHome.bind(this);
    this.changeViewSaved=this.changeViewSaved.bind(this);
    this.changeViewAbout=this.changeViewAbout.bind(this);
    this.addReview=this.addReview.bind(this);
  }
  changeViewHome(e){
    this.setState({
      home:true,
      about:null,
      saved:null
    })
  };
  changeViewSaved(e){
    this.setState({
      home:null,
      about:null,
      saved:true
    })
  };
  changeViewAbout(e){
    this.setState({
      home:null,
      about:true,
      saved:null
    })
  };

  saveMovie(currentMovie){
    axios.post('/api/movies/saved',{movie:currentMovie}).then(response=>{
      this.setState({
        savedMovies: response.data
      })
    })
    // let savedMovies = this.state.savedMovies
    // let movie ={
    //     name:currentMovie.originalTitle,
    //     description:currentMovie.overview,
    //     picture:currentMovie.picture,
    //     id:currentMovie.identifier,
    //     rating:''
    // }
    
    // savedMovies.push(movie)
    // this.setState({
    //     savedMovies
    // })
  };
  deleteMovie(identifier){
    axios.delete(`/api/movies/delete/${identifier}`).then(response=>{
    this.setState({
      savedMovies: response.data
    }
    )}
  )

  //   this.setState({
  //   savedMovies: this.state.savedMovies.filter((x => {
  //     return x.id !== index
  //   }))
  // })
  };
  addReview(event,index){
    axios.put(`/api/movies/rating`,{index,event:event.target.value}).then(response=>{
    this.setState({
      savedMovies: response.data
    }
    )
    // let savedMovies = this.state.savedMovies;
    // let updatedMovies = savedMovies.map(movie=>{
    //   if(movie.id===index){
    //     movie.rating=e.target.value
    //   }
    //   return movie;
    
    // });
    // this.setState({
    //     savedMovies:updatedMovies
    // })

  })
};

  render() {
    console.log(this.state.savedMovies)
    return (
      <div className="App">
        <div className='NavBarContainer'>
          <span><button href="" onClick={this.changeViewHome} >Home</button></span>
          <span><button href="" onClick={this.changeViewSaved}>Saved</button></span>
          <span><button href="" onClick={this.changeViewAbout}>About</button></span>
        </div>
        {this.state.home && <Home save={(state)=> this.saveMovie(state)}/>}
       {this.state.about && <About />}
       {this.state.saved && <Saved savedMovies={this.state.savedMovies} deleteMovie={this.deleteMovie} addReview={this.addReview}/>}
      </div>
    );
  }
}

export default App;
