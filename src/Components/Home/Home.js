import React, { Component } from 'react';
import Title from './../Title/Title';
import RandomMovie from './../RandomMovie/RandomMovie';
import axios from 'axios';



class Home extends Component {
    constructor(){
        super();
        this.state = {
            results:[]
        }
    }
    componentDidMount(){
        axios.get('/api/movies').then(response=>console.log(response.data));
    }
    render() {
        return (
            <div>
                <Title/>
                <RandomMovie/>
            </div>
        );
    }
}

export default Home;