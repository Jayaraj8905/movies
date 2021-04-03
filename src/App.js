import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import MoviesList from './movies/list';

// http://www.omdbapi.com/?i=tt3896198&apikey=4d288a4e
const App = () =>  {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const searchKey = 'hindi';
    const apikey = '4d288a4e';
    const url = `http://www.omdbapi.com/?s=${searchKey}&apikey=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies container-fluid">
      <div className="row">
        <MoviesList movies={movies}></MoviesList>
      </div>
    </div>
  );
}

export default App;
