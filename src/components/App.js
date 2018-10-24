import React, { Component } from 'react';

class App extends Component {
  state = {
    searchTerm: null
  }

  handleSearchTermUpdate = () => {
    console.log('test');
  }

  render() {
    return (
      <input type="text" onChange={ this.handleSearchTermUpdate } />

    )
  }
}

export default App;