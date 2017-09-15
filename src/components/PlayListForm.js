import React, { Component } from 'react';


export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    };
  }

  handleNameChange(event){
    this.setState({
      userName: event.target.value
    })
  }

  handleArtistChange(event){
    this.setState({
      songArtist: event.target.value
    })
  }

  handleTitleChange(event){
    this.setState({
      songTitle: event.target.value
    })
  }

  handleNoteChange(event){
    this.setState({
      songNotes: event.target.value
    })
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
            onChange={this.handleNameChange}
            type="text" className="form-control" id="user" placeholder="Name or User Name"
            value={this.state.userName}
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="band">Artist/Band:</label>
            <input
            onChange={this.handleArtistChange}
            type="text" className="form-control" id="band" placeholder="Artist or Band Name"
            value={this.state.songArtist}
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="song">Song Title:</label>
            <input
            onChange={this.handleTitleChange}
            type="text" className="form-control" id="song" placeholder="Song Title"
            value={this.state.songTitle}
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes about Song</label>
            <textarea
            onChange={this.handleNoteChange}
            type="text" className="form-control" id="notes"
            value={this.state.songNotes}
            required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
