import React, { Component } from 'react'
class Gif extends Component {

  render() {
    const { gif } = this.props;
    return (
      <li className="gif-container">
        <img src={ gif.images.fixed_width.url } className="gif" />
        <p>![Giphy]({gif.images.fixed_width.url})</p>
      </li>
    )
  }
}

export default Gif;