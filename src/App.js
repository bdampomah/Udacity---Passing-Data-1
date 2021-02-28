import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import FavoriteMovies from './FavoriteMovies';
import { profiles, users, movies } from './data.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - Passing Data</p>
        </header>
        <h2>Favorite Movies</h2>
        <FavoriteMovies profiles={profiles} users={users} movies={movies} />
      </div>
    );
  }
}

export default App;
