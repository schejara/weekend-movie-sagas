import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import "./MovieDetails.css"

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
        <div data-testid="movieDetails" className='movie'> 
            {movie ? (
                <>
                    <h2>{movie.title}</h2> 
                    <img className='image' src={movie.poster} alt={movie.title} />
                    <div className = "description">{movie.description}</div> 
                    <h3 className='title'>Genres:</h3> 
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
