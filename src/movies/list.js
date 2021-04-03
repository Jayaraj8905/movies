import React from 'react';
import { HeartFill, HeartHalf } from 'react-bootstrap-icons';

const MoviesList = (props) => {
    const Component = props.addFavourites ? HeartFill : HeartHalf;
    return (
        <>
            {props.movies.map((movie, index) => {
                return <div className='image-holder d-flex align-items-start justify-content-center m-3' key={movie.imdbID}>
                    <img src={movie.Poster} alt='Not Available'></img>
                    <div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
                        <Component color="red"/>
					</div>
                    
                </div>
            })}
        </>
    )
};

export default MoviesList;