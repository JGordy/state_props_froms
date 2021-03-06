import React, { Component } from 'react';

import PlayListItem from './PlayListItem.js';


export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {songs: []}
  }

  fetchData = (event) => {
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
  }
  render() {
    let listItem = this.state.songs.map((songData, index) => {
      return (
        <PlayListItem key={index + 1} songData={songData}/>
      )
    })
    return (
      <div className="col-md-6 scroll">
        <form onSubmit={this.fetchData} className="sticky-top">
          <button type="submit" className="btn btn-block btn-outline-info mb-2">Update List</button>
        </form>
        {listItem}
      </div>
    );
  }
}
