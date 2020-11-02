import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({ type: CREATE_EVENTS, response })
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id})
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: READ_EVENT, response })
}

export const putEvent = values => async dispatch => {
  const id = values.id
  const response = await axios.put(`${ROOT_URL}/events/${id}${QUERYSTRING}`, values)
  dispatch({ type: UPDATE_EVENT, response })
}