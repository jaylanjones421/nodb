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
      saved: null
    }
    this.changeViewHome=this.changeViewHome.bind(this);
    this.changeViewSaved=this.changeViewSaved.bind(this);
    this.changeViewAbout=this.changeViewAbout.bind(this);
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

  render() {
    return (
      <div className="App">
        <div className='NavBarContainer'>
          <span><button href="" onClick={this.changeViewHome} >Home</button></span>
          <span><button href="" onClick={this.changeViewSaved}>Saved</button></span>
          <span><button href="" onClick={this.changeViewAbout}>About</button></span>
        </div>
        {this.state.home && <Home />}
       {this.state.about && <About />}
       {this.state.saved && <Saved/>}
      </div>
    );
  }
}

export default App;
