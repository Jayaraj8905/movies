import React from 'react';

const MoviesList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-holder d-flex align-items-start justify-content-center m-3' key={movie.imdbID}>
                    <img src={movie.Poster} alt='Not Available'></img>
                </div>
            ))}
        </>
    )
};

export default MoviesList;