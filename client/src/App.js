import React, { useState, useEffect } from 'react';
import axios from 'axios';
// importing stuff from react-dom
import { Route, Switch, Link } from 'react-router-dom'

import SavedList from './Movies/SavedList';

// Importing more files
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>

      {/* Adding routes */}

      <Switch>

        <Route path='/movies/:movieID'>
          <Movie />
        </Route>
        {/* <Route path='/movies/:movieID' component={Movie} /> */}

        <Route path='/' exact>
          <MovieList movies={movieList} />
        </Route>


      </Switch>

    </div>
  );
};

export default App;
