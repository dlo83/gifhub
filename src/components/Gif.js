import React, { Component } from 'react'
class Gif extends Component {

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
      <li className="gif-container">
        <img src={ gif.images.fixed_width.url } className="gif" onClick={ this.handleImageSelect } />
      </li>
    )
  }
}

export default Gif;