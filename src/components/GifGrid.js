import React, { Component } from 'react'
import Gif from './Gif';

class GifGrid extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <ul className="gif-grid">
        {
          gifs.map(gif => <Gif gif={gif} />)
        }
      </ul>
    );
  }
}

export default GifGrid;