import React, { Component } from 'react';
import GifGrid from './GifGrid';
import SearchBar from './SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import { Divider } from 'semantic-ui-react'
import { search } from './Api';

class App extends Component {
  state = {
    isLoading: false,
    imageSize: 'downsized_medium',
    searchTerm: null,
    gifs: [],
  }

  componentDidMount() {
    this.requestClipboardPermission();
  }

  requestClipboardPermission = () => {
    navigator.permissions.query({name:'clipboard-write'}).then(function(result) {
      // if (result.state == 'granted') {
      //   console.log(result.state);
      // } else if (result.state == 'prompt') {
      //   console.log(result.state);
      // } else if (result.state == 'denied') {
      //   console.log(result.state);
      // }
      // result.onchange = function() {
      //   console.log(result.state);
      // }
    });
  }

  handleCopySuccess = () => {
    console.log('handle copy success in App.js called');
    toast('Gif markdown copied to your clipboard!');
  }

  handleCopyFailure = () => toast('Dang! Could not copy gif to your clipboard');

  handleImageSizeChange = (ev, {value}) => this.setState({imageSize: value});

  handleSearchTermUpdate = ({ target: { value }} ) => this.setState({ searchTerm: value });

  handleSearch = async () => {
    this.setState({ gifs: [], isLoading: true });

    const { data: gifs } = await search({
      query: this.state.searchTerm,
      limit: '25',
      rating: 'R'
    });

    this.setState({ gifs, isLoading: false });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={ this.handleSearchTermUpdate }
          onSizeChange={ this.handleImageSizeChange }
          onSearch={ this.handleSearch }
          value={ this.state.searchTerm }
          isLoading={ this.state.isLoading }
        />
        <Divider hidden />
        <GifGrid
          gifs={ this.state.gifs }
          imageSize={ this.state.imageSize }
          onCopySuccess={ this.handleCopySuccess }
          onCopyFailure={ this.handleCopyFailure }
        />
        <ToastContainer closeButton={ false } />
      </React.Fragment>
    )
  }
}

export default App;