import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const MovieDetails = () => {
    const history = useHistory();
    const handleBack = () => {
        history.push("/");
    }
return(

<div>
    <h1>Details</h1>
    <button onClick={handleBack}>Bact to MovieList</button>
</div>
)

}
export default MovieDetails;

