import React from 'react';
import  {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const ProtectedRoutes = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            rest.auth.email ? <Component {...props} /> : <Redirect to='/login' />
        )} />
    );
}

const mapStateToProps = state => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ProtectedRoutes);