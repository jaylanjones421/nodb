import React, { Component } from 'react';
import Title from './../Title/Title';
import RandomMovie from './../RandomMovie/RandomMovie';
import axios from 'axios';


class Home extends Component {
    constructor(){
        super();
        this.state = {
            results:[],
            name:'',
            description:'',
            picture:'',
            saved:[],
            id: ''
        }
        this.randomMovie=this.randomMovie.bind(this);
    }


    componentDidMount(){
        this.randomMovie();
    }
    randomMovie(){
        axios.get('/api/movies').then(response=>{
            let movie =response.data.results[Math.ceil(Math.random()*19)];
            this.setState({
                results:response.data.results,
                name:movie.original_title,
                description:movie.overview,
                picture:movie.backdrop_path,
                id: movie.id
            })
        }) 
    }
    

    render() {
        return (
            <div>
                <Title/>
                <RandomMovie originalTitle={this.state.name} picture={this.state.picture} overview={this.state.description} randomMovie={this.randomMovie} save={(state)=>{this.props.save(state)}} identifier={this.state.id}/>
            </div>
        );
    }
}

export default Home;