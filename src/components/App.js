import React, { Component } from 'react';
import GifGrid from './GifGrid';

class App extends Component {
  state = {
    searchTerm: null,
    gifs: [],
  }

  componentDidMount() {
    this.requestClipboardPermission();
  }

  requestClipboardPermission = () => {
    navigator.permissions.query({name:'clipboard-write'}).then(function(result) {
      if (result.state == 'granted') {
        console.log(result.state);
      } else if (result.state == 'prompt') {
        console.log(result.state);
      } else if (result.state == 'denied') {
        console.log(result.state);
      }
      result.onchange = function() {
        console.log(result.state);
      }
    });
  }

  handleSearchTermUpdate = ({ target: { value }} ) => {
    this.setState({ searchTerm: value });
  }

  handleSearch = () => {
    const API_KEY = '6pru14UvLOEhi06VmrSebbDCbTnyS6Ry';
    const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

    fetch(`${baseUrl}&q=${this.state.searchTerm}&limit=25&offset=0&rating=R&lang=en`)
    .then(res => res.json())
    .then(({data : gifs}) => {
      console.log(gifs);
      this.setState({ gifs });
    });
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Search Giphy..." onChange={ this.handleSearchTermUpdate } />
        <button onClick={ this.handleSearch }>Find a gif</button>
        <GifGrid gifs={ this.state.gifs } />
      </React.Fragment>
    )
  }
}

export default App;