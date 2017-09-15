import React, { Component } from 'react';


import PlayListItem from './PlayListItem.js';


export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {songs: ''}
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
          console.log("state", this.state.songs);
        })
  }
  render() {
    let songData = this.state.songs;
    let listItem = songData.map((songData, index) => {
      return (
        <PlayListItem key={index + 1} songData={songData}>
      )
    })
    return (
      <div className=" card col-md-6">
        <form className="form">
          <button className="btn btn-primary">Submit</ button>
        </ form>
        {listItem}
      </ div>
    );
  }
}
