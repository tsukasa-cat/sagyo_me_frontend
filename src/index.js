import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducers'
import './index.css';

import EventsNew from './components/events_new'
import EventsShow from './components/events_show'
import EventsIndex from './components/events_index'
import * as serviceWorker from './serviceWorker'
import MyLayout from './components/my_layout'

const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <MyLayout children={
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew}></Route>
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/events" component={EventsIndex} />
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    } />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
