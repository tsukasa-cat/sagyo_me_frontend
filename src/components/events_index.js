import React, { Component } from 'react';
import {connect} from 'react-redux'

import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const Card = styled.div`
    width: 700px;
    border-bottom: 1px solid black;
    padding: 40px;
    display: flex;
`;

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <Card key={event.id}>
        <div>
          {event.id}
          </div>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </Card>

    ))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.renderEvents()}
        </div>
        <Link to="/events/new" >New Event</Link>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = {readEvents}
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
