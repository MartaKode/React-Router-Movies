import React from 'react';
// importing Link from react-dom
import {Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* added a Link to the home button */}
    <Link to='/'>
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
