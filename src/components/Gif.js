import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

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
    const { gif } = this.props;
    return (
      <Image src={ gif.images.fixed_width.url } onClick={ this.handleImageSelect } />
    )
  }
}
