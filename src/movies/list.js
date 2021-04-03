import React from 'react';

const MoviesList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-holder d-flex justify-content-start m-3' key={movie.imdbID}>
                    <img src={movie.Poster} alt='Not Available'></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                    </div>
                </div>
            ))}
        </>
    )
};

export default MoviesList;