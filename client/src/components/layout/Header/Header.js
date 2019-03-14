import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import style from './index.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../../actions/login';
import logo from '../../../assets/logo.svg';
import history from '../../../assets/history_logo.svg';

const Header = (props) => {
  return (
    <header className={style.header}>
      <Link to='/'><img className={style.logo} src={logo} alt="logo"/></Link>
      {!props.auth.name ?
        <div className={style.box}>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div> :
        <div className={style.box}>
          <Link to="/history"><img src={history} className={style.history} alt="history"/></Link>
          <p className={style.name}>Give It Your Best! <br/> {props.auth.name}</p>
          <i onClick={() => props.logout(props.history)} className="fas fa-sign-out-alt"/>
        </div>
      }

    </header>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};
export default withRouter(connect(mapStateToProps, actions)(Header));