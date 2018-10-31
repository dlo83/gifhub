import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onChange, onSearch, value } = this.props;
    return (
      <div className="searchbar">
        <h2>GifHub</h2>
        <input
          autoFocus={ true }
          className="searchbox"
          type="text"
          placeholder="Search Giphy"
          onChange={ onChange }
          onKeyPress={event => {
            if (event.key === 'Enter') {
              onSearch();
            }
          }}
          value={ value}
        />
      </div>
    )
  }
}

export default SearchBar;