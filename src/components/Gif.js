import React, { Component } from 'react';
import { Image, Popup } from 'semantic-ui-react';

const imageStyle = {
  cursor: 'pointer',
  objectFit: 'cover',
  height: '80px',
  width: '80px'
};

export default class Gif extends Component {

  handleImageSelect = (ev) => {
    console.log(ev.target.src);
    navigator.clipboard.writeText(`![Gif](${ev.target.src})`)
    .then(() => {
      this.props.onCopySuccess();
    }, () => {
      this.props.onCopyFailure();
    });
  }

  render() {
    const { gif, imageSize } = this.props;
    return (
      <Popup
        position='bottom center'
        trigger={ <Image
          fluid
          bordered
          src={ gif.images[imageSize].url }
          style={ imageStyle }
          onClick={ this.handleImageSelect }
        /> }
        content={ <Image
          fluid
          bordered
          src={ gif.images[imageSize].url }
        /> }
        on='hover'
      />

    )
  }
}
