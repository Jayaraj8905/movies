import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import MoviesList from './movies/list';
import MovieSearch from './movies/search';

// http://www.omdbapi.com/?i=tt3896198&apikey=4d288a4e
const App = () =>  {
  const [movies, setMovies] = useState([]);
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

  return (
    <div className="movies container-fluid">
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieSearch value={searchStr} setSearchStr={setSearchStr} />
			</div>
      <div className="row">
        <MoviesList movies={movies}></MoviesList>
      </div>
    </div>
  );
}

export default App;
