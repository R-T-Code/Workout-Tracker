import * as types from './types';
import axios from 'axios';

export function onInputChange(e){
    return {
        type: types.REGISTRATION_INPUT_CHANGE,
        name: e.target.name,
        value: e.target.value
    }
}

export function onRegister (e, data, history){
    e.preventDefault()

    // Front end validation
    const errors = {};
    if(!data.name) errors.name = 'Enter user name';
    if(!data.email) errors.email = 'Enter user email';
    if(!data.password) errors.password = 'Enter user password';

    if(Object.keys(errors).length!==0){
        return {
            type: types.REGISTRATION_FORM_ERROR,
            errors
        }
    }

    return async function(dispatch){
        try{
            const res = await axios.post('/api/auth/register', data);
            localStorage.setItem('auth-token', res.data);
            // set axios headers to user token for all requests
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
            // if all ok dispatch obj to reducer and redirect
            dispatch({
                type: types.REGISTRATION_FORM_SUCCESS,
                data
            });
            history.push('/');
        } catch (e){
            console.log(e.response);
            if(e.response.data === 'that user exists') errors.email = 'That user exists';
            dispatch({
                type: types.REGISTRATION_FORM_ERROR,
                errors
            })
        }
    }
}