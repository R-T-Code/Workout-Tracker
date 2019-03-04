import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/registration';
import style from './index.module.scss';
import Heading1 from '../common/Heading1/Heading1';
import ContentWrapper from '../common/ContentWrapper/ContentWrapper';
import Button1 from '../common/Button1/Button1';

const Register = (props) => {
  const {errors} = props.registration;

  return (
    <div className={style.register}>
    
      <Heading1>Registration</Heading1>
      <ContentWrapper>
      <form onSubmit={(e)=>props.onRegister(e, props.registration, props.history)}>
        <div className={style.field}>
          <label htmlFor="name">
            {errors.name ? <span >{errors.name}</span> : 'Name'}
          </label>
          <input type="text"
                 id='name'
                 autoComplete='new-name'
                 value={props.registration.name}
                 onChange={props.onInputChange}
                 name='name'/>
        </div>
        <div className={style.field}>
          <label htmlFor="email">
            {errors.email ? <span >{errors.email}</span> : 'Email'}
          </label>
          <input type="text"
                 id='email'
                 autoComplete='new-email'
                 value={props.registration.email}
                 onChange={props.onInputChange}
                 name='email'/>
        </div>
        <div className={style.field}>
          <label htmlFor="password">
            {errors.password ? <span >{errors.password}</span> : 'Password'}
          </label>
          <input type="password"
                 id='password'
                 autoComplete='new-password'
                 value={props.registration.password}
                 onChange={props.onInputChange}
                 name='password'/>
        </div>
        <Button1>Register</Button1>
      </form>
      </ContentWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    registration:state.registration
  }
};
export default connect(mapStateToProps, actions)(Register);