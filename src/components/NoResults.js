import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'

export default class NoResults extends Component {
  render() {
    return (
      <Container>
        <Segment placeholder>
          <Header icon>
            <Icon name='search' />
            No gifs matching your query.
          </Header>
        </Segment>
      </Container>
    )
  }
}
