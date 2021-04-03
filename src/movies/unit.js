import React from 'react';

const MoviesUnit = (props) => {
    return (
        <>
            <div className='image-holder d-flex justify-content-start m-3'>
                <img src={props.movie.Poster} alt='Not Available'></img>
                <div
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'
                >
                </div>
            </div>
        </>
    )
};

export default MoviesList;