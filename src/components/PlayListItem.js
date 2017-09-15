import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h4>User: {this.props.songData.userName}</h4>
        <h4>Artist/Band: {this.props.songData.songArtist}</h4>
        <h4>Title: {this.props.songData.songTitle}</h4>
        <h4>Notes: {this.props.songData.songNotes}</h4>
      </div>
    );
  }
}
