let movies = [];
let id = 0;

module.exports = {
  addMovie(req, res) {
    let movie = {
      name:req.body.movie.originalTitle,
      description:req.body.movie.overview,
      picture:req.body.movie.picture,
      id:req.body.movie.identifier,
      rating:''
      }
    movies.push(movie);
    
    res.send(movies)
    // const movie = req.body
    //   movie.movieId = id
    //   id ++;
    //   movies.push(movie);
    //   res.status(200).send(`${movie.title} added`);
    },

  
  getMovies(req, res){
    res.status(200).send(movies);
  },

  updateRating(req, res) {
    console.log(movies)
    movies = movies.map(x=>{
      if(x.id===req.body.index){
        x.rating=req.body.event;
      }
      return x;
    });
    console.log(movies)
    res.send(movies)
    // let savedMovies = this.state.savedMovies;
    // let updatedMovies = savedMovies.map(movie=>{
    //   if(movie.id===index){
    //     movie.rating=e.target.value
    //   }
    //   return movie;
    
    // });
    // this.setState({
    //     savedMovies:updatedMovies

  },

  deleteMovie(req, res) {
    movies = movies.filter(x => x.id !== Number(req.params.id));
    res.send(movies);
    // const movieId = req.params.movieId;
    // movies = movies.filter(movie => !(movie.movieId == movieId));
    // res.status(200).send(movies);
  }
}
;