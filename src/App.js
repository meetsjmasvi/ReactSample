import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/BookList';
import BookDetails from './containers/BookDetails';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='container'>
          <div className='col-sm-4'>
            <BookList />
          </div>
          <div className='col-sm-8'>
            <BookDetails />
          </div>
          <div className='col-sm-12'>
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
