let movies = [];
let id = 0;

module.exports = {
  addMovie(req, res) {
    const movie = req.body
      movie.movieId = id
      id ++;
      movies.push(movie);
      res.status(200).send(`${movie.title} added`);
    },

  
  getMovies(req, res){
    res.status(200).send(movies);
  },

  updateReview(req, res) {

    const review = 'rate movie 1-5 stars';
    const movieId = req.params.movieId;
    movies = movies.map((movie) => {
      if(movie.movieId == movieId) {
        movie.review = review;
        return movie;
      }
      return movie;
    });

    res.status(200).send();
  },

  removeMovie(req, res) {
    const movieId = req.params.movieId;
    movies = movies.filter(movie => !(movie.movieId == movieId));
    res.status(200).send(movies);
  }
}
;