import React, { Component } from 'react'
import Gif from './Gif';
import { Container, Image } from 'semantic-ui-react';

class GifGrid extends Component {
  render() {
    const { gifs, onCopySuccess, onCopyFailure } = this.props;
    let dom;

    if (gifs.length) {
      dom = (
      <Image.Group size='tiny'>        {
          gifs.map(gif => <Gif gif={gif} onCopySuccess={ onCopySuccess } onCopyFailure={ onCopyFailure } />)
        }
      </Image.Group>
      );
    } else {
      dom = (
        <div className="no-results">
          <p>No results found. Please enter a new search term!</p>
        </div>
      )
    }
    return (
      <Container>
        { dom }
      </Container>
    );
  }
}

export default GifGrid;