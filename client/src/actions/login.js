import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function onInputChange(e){
    const {name,value} = e.target;
    return{
        type: types.LOGIN_INPUT_CHANGE,
        name,
        value
    }
}

export function onLogin(e, data, history){
    e.preventDefault();

    // Input validation (front end)
    const errors = {}
    if(!data.email) errors.email = 'Enter Your email';
    if(!data.password) errors.password = 'Enter Your password';
    if(Object.keys(errors).length!==0){
        return {
            type: types.LOGIN_FORM_ERROR,
            errors
        }
    }

    return async function(dispatch){
        try{
            const res = await axios.post('/api/auth/login', data);
            localStorage.setItem('auth-token', res.data);
            // set axios headers to user token for all requests
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
            dispatch({
                type: types.LOGIN_FORM_SUCCESS,
                data: jwt.decode(res.data) // decoded JWT token (user)
            })
            history.push('/')
        } catch(e){
            console.log(e.response);
            if(e.response.data === 'user not found') errors.email = 'User not found';
            if(e.response.data === 'incorrect password') errors.password = 'Incorrect password';
            dispatch({
                type: types.LOGIN_FORM_ERROR,
                errors
            })
        }
    }
}

export function logout(history){
    localStorage.removeItem('auth');
    delete axios.defaults.headers.common['Authorization'];
    history.push('/login');
    return {
        type: types.LOGOUT
    }
}