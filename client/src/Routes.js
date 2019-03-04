import React, { Component } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import App from './components/App/App';
import Header from './components/layout/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import store from './reducers/index';
import {LOGIN_FORM_SUCCESS} from './actions/types';
import axios from 'axios';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';


// check for token in LS 
const token = localStorage.getItem('auth-token');
if(token){
  // set axios to use headers with token
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  // decode token and update auth reducer
  const data = jwt.decode(token);
  // manually dispatch action
  store.dispatch({
    type: LOGIN_FORM_SUCCESS,
    data
  })
}

class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
          <div >
            <Header />
            <Switch >
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <ProtectedRoutes path='/' component={App} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
