import React, { Component } from 'react';
import { Dropdown, Header, Input, Menu } from 'semantic-ui-react'
import { sizeOptions } from './Common';

const menuStyle = {
  border: 'none'
};

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    console.log(this.inputRef);
  }


  render() {
    const { isLoading, onChange, onSearch, onSizeChange, value } = this.props;
    return (
        <Menu borderless inverted attached={'top'} style={menuStyle}>
          <Menu.Item position='left'>
            <Header as='h3' inverted>GifHub</Header>
          </Menu.Item>

          {/* <Menu.Item>
          <Dropdown
            placeholder='Image Size'
            fluid
            selection
            onChange={ onSizeChange }
            options={sizeOptions}
          />
          </Menu.Item> */}

          <Menu.Item position='right'>
            <Input
              autoFocus
              loading={ isLoading }
              icon={ isLoading ? 'loading' : 'search' }
              inverted
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