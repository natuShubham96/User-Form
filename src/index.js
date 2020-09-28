import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import AboutUs from './Components/AboutUs'
import NotFound from './Components/NotFound'
import LogIn from './Components/LogIn'
import TeamList from './Components/TeamList'
import {teamReducer} from './Reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(teamReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/AboutUs" component={AboutUs} />
    <Route exact path="/LogIn" component={LogIn} />
    <Route exact path='/DisplayTeams' component={TeamList} />
    <Route component={NotFound} />
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
