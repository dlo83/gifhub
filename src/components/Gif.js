import React, { Component } from 'react'
class Gif extends Component {

  handleImageSelect = (ev) => {
    console.log(ev.target.src);
    navigator.clipboard.writeText(`![Gif](${ev.target.src})`)
    .then(() => {
      alert('Gif copied to clipboard');
    }, () => {
      alert('Could not copy to clipboard');
    });
  }

  render() {
    const { gif } = this.props;
    return (
      <li className="gif-container">
        <img src={ gif.images.fixed_width.url } className="gif" onClick={ this.handleImageSelect } />
        {/* <p>![Giphy]({gif.images.fixed_width.url})</p> */}
      </li>
    )
  }
}

export default Gif;