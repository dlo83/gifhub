import React, { Component } from 'react'
import Gif from './Gif';

class GifGrid extends Component {
  render() {
    const { gifs, onCopySuccess, onCopyFailure } = this.props;
    let dom;

    if (gifs.length) {
      dom = (
        <ul className="gif-grid">
        {
          gifs.map(gif => <Gif gif={gif} onCopySuccess={ onCopySuccess } onCopyFailure={ onCopyFailure } />)
        }
      </ul>
      );
    } else {
      dom = (
        <div className="no-results">
          <p>No results found. Please enter a new search term!</p>
        </div>
      )
    }
    return dom;
  }
}

export default GifGrid;