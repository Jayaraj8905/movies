import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import MoviesList from './movies/list';
import MovieSearch from './movies/search';

// http://www.omdbapi.com/?i=tt3896198&apikey=4d288a4e
const App = () =>  {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const apikey = '4d288a4e';

  const getMovies = async () => {
    const toSearch = searchStr || 'indian';
    const url = `http://www.omdbapi.com/?s=${toSearch}&apikey=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search || []);
    
  }

  useEffect(() => {
    getMovies();
  }, [searchStr]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('movies-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items) => {
		localStorage.setItem('movies-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
    const alreadyExists = favourites.find((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID);
    if (!alreadyExists) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
    <div className="movies container-fluid">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <div className='col'>
          <h3>Movies</h3>
        </div>
				<MovieSearch value={searchStr} setSearchStr={setSearchStr} />
			</div>
      <div className="row">
        <MoviesList movies={movies} handleFavouritesClick={addFavouriteMovie} addFavourites={true}></MoviesList>
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <div className='col'>
          <h3>Favourites</h3>
        </div>
			</div>
      <div className="row">
        <MoviesList movies={favourites} handleFavouritesClick={removeFavouriteMovie} addFavourites={false}></MoviesList>
      </div>
    </div>
  );
}

export default App;
