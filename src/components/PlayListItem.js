import React, { Component } from 'react';

export default class PlayListItem extends Component {

  render() {
    return (
      <div className="card border-0 text-left mb-4 p-3">
        <h4 className="text-dark bb"><span>User:</span> <span className="d-flex flex-row-reverse name_color">
        {this.props.songData.userName}</span></h4>
        <h4 className="text-dark bb"><span>Artist/Band:</span> <span className="text-info d-flex flex-row-reverse">
        {this.props.songData.songArtist}</span></h4>
        <h4 className="text-dark bb"><span>Title:</span> <span className="text-info d-flex flex-row-reverse">
        {this.props.songData.songTitle}</span></h4>
        <h4 className="text-dark"><span>Notes:</span> <span className="text-info d-flex flex-row-reverse">{this.props.songData.songNotes}</span></h4>
      </div>
    );
  }
}
