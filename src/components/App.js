import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="d-flex flex_container p-3">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
