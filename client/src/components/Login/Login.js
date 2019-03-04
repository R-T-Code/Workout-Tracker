import React from 'react';
import * as actions from '../../actions/login';
import {connect} from 'react-redux';
import style from './index.module.scss';
import Heading1 from '../common/Heading1/Heading1';
import ContentWrapper from '../common/ContentWrapper/ContentWrapper';
import Button1 from '../common/Button1/Button1';

const Login = (props) => {
  const {errors} = props.login
  return (
    <div className={style.login}>
      <Heading1>Login</Heading1>
      <ContentWrapper>
          <form onSubmit={(e)=>props.onLogin(e, props.login, props.history)}>
            <div className={style.field}>
              <label htmlFor="email">
                {errors.email ? <span>{errors.email}</span> : 'Email'}
              </label>
              <input type="text"
                    id='email'
                    autoComplete='new-email'
                    value={props.login.email}
                    onChange={props.onInputChange}
                    name='email'/>
            </div>
            <div className={style.field}>
              <label htmlFor="password">
                {errors.password ? <span>{errors.password}</span> : 'Password'}
              </label>
              <input type="password"
                    id='password'
                    autoComplete='new-password'
                    value={props.login.password}
                    onChange={props.onInputChange}
                    name='password'/>
            </div>
            <Button1>Login</Button1>
          </form>
      </ContentWrapper>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    login:state.login,
    auth:state.auth
  }
};
export default connect(mapStateToProps, actions)(Login);