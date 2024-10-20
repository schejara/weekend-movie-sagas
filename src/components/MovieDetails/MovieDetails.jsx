import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const movieId = location.state?.movieId;
   
    console.log('movie id in detail page is', movieId);
    const movie = useSelector(state => state.selectedMovie);

    useEffect(() => {
        if (movieId) {
            dispatch({ type: 'GET_MOVIE_DETAILS', id: movieId });
        }
    }, []);

    const handleBack = () => {
        history.push("/");
    };

    return (
        <div data-testid="movieDetails"> 
            {movie ? (
                <>
                    <h1>{movie.title}</h1> 
                    <img src={movie.poster} alt={movie.title} />
                    <p>{movie.description}</p> 
                    <h3>Genres:</h3> 
                    <ul>
                        {movie.genres?.map((genre, index) => (
                            <li key={index}>{genre}</li> 
                        ))} 
                    </ul> 
                    <button data-testid="toList" onClick={handleBack}>back to movie list</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetails;
