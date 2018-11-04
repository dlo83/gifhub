import React, { Component } from 'react';
import GifGrid from './GifGrid';
import SearchBar from './SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import { Divider } from 'semantic-ui-react'

class App extends Component {
  state = {
    isLoading: false,
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

  handleCopySuccess = () => {
    console.log('handle copy success in App.js called');
    toast('Gif markdown copied to your clipboard!');
  }

  handleCopyFailure = () => toast('Dang! Could not copy gif to your clipboard');

  handleSearchTermUpdate = ({ target: { value }} ) => {
    console.log(value);
    this.setState({ searchTerm: value });
  }

  handleSearch = () => {
    // Don't worry -- it's public.  Should probably still move to an .env var anyway.
    this.setState({ gifs: []});
    const API_KEY = '6pru14UvLOEhi06VmrSebbDCbTnyS6Ry';
    const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;
    this.setState({ isLoading: true })
    fetch(`${baseUrl}&q=${this.state.searchTerm}&limit=25&offset=0&rating=R&lang=en`)
    .then(res => res.json())
    .then(({data : gifs}) => {
      this.setState({ gifs, isLoading: false });
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={ this.handleSearchTermUpdate }
          onSearch={ this.handleSearch }
          value={ this.state.searchTerm }
          isLoading={ this.state.isLoading }
        />
        <Divider hidden />
        <GifGrid
          gifs={ this.state.gifs }
          onCopySuccess={ this.handleCopySuccess }
          onCopyFailure={ this.handleCopyFailure }
        />
        <ToastContainer closeButton={ false } />
      </React.Fragment>
    )
  }
}

export default App;