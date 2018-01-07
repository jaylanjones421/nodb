import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import Saved from './Components/Saved/Saved'

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

  saveMovie(state){
    let savedMovies = this.state.savedMovies
    let movie ={
        name:state.originalTitle,
        description:state.overview,
        picture:state.picture,
        id: state.identifier,
        rating:''
    }
    
    savedMovies.push(movie)
    this.setState({
        savedMovies
    })
  };
  deleteMovie(index){
    this.setState({
    savedMovies: this.state.savedMovies.filter((x => {
      return x.id !== index
    }))
  })
  }
  addReview(e,index){
    
    let savedMovies = this.state.savedMovies;
    let updatedMovies = savedMovies.map(movie=>{
      if(movie.id===index){
        movie.rating=e.target.value
      }
      return movie;
    
    });
    this.setState({
        savedMovies:updatedMovies
    })

  }

  render() {
    console.log(this.state)
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
