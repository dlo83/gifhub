import React, { Component } from 'react';
import { Container, Header, Input, Menu } from 'semantic-ui-react'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    console.log(this.inputRef);
  }

  render() {
    const { isLoading, onChange, onSearch, value } = this.props;
    return (
        <Menu borderless>
          <Menu.Item position='left'>
            <Header as='h3'>GifHub</Header>
          </Menu.Item>

          <Menu.Item position='right'>
            <Input
            loading={ isLoading }
            icon={ isLoading ? 'loading' : 'search' }
            iconPosition='right'
            placeholder='Search...'
            onChange={ onChange }
            onKeyPress={event => {
              if (event.key === 'Enter') {
                onSearch();
              }
            }}
            value={ value }
          />
        </Menu.Item>
      </Menu>
    )
  }
}

export default SearchBar;