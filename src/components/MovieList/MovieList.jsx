import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieList() {
  const history = useHistory()
  

  const handleImageClick = (movieID) => {
    console.log('Movie id is', movieID)
    history.push({
      pathname: `/MovieDetails/${movieID}`, 
      state: { movieId: movieID } // Pass the movie ID as state
    });
  };


  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id} >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={() => handleImageClick(movie.id)} />
            </div>
         
          );
        })}
      </section>
      
    </main>
    
  );
}

export default MovieList;
