import React, { Component } from 'react'
import Gif from './Gif';
import { Container, Image } from 'semantic-ui-react';
import NoResults from './NoResults';

class GifGrid extends Component {
  render() {
    const { gifs, imageSize, onCopySuccess, onCopyFailure } = this.props;

    if (!gifs.length) return <NoResults />

    return (
      <Container>
        <Image.Group size='tiny'>
          { gifs
            .map(gif =>
              <Gif
                  gif={gif}
                  imageSize={ imageSize }
                  onCopySuccess={ onCopySuccess }
                  onCopyFailure={ onCopyFailure }
              />
            )
          }
        </Image.Group>
      </Container>
    );
  }
}

export default GifGrid;