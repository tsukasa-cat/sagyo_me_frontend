import _ from 'lodash'
import { DELETE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, CREATE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data.events, 'id')
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const event = action.response.data.event
      return { ...events, [event.id]: event }
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
