import React, { Component } from 'react';


export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  addToList = (event) => {
      event.preventDefault();
      this.setState({
        userName: event.target.value,
        songTitle: event.target.value,
        songArtist: event.target.value,
        songNotes: event.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div className="form d-flex flex-column col-md-6">
        <form onSubmit={this.addToList}>
          <div className="form-group">
            <label htmlFor="user">Username:</label>
            <input

            type="text" className="form-control" id="user" placeholder="Name or User Name"
            value={this.state.userName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="band">Artist/Band:</label>
            <input

            type="text" className="form-control" id="band" placeholder="Artist or Band Name"
            value={this.state.songArtist}
            />
          </div>
          <div className="form-group">
            <label htmlFor="song">Song Title:</label>
            <input
            // onChange={this.handleUserName}
            type="text" className="form-control" id="song" placeholder="Song Title"
            value={this.state.songTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes about Song</label>
            <textarea
            // onChange={this.handleUserName}
            type="text" className="form-control" id="notes"
            value={this.state.songNotes}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
