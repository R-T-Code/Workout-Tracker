import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN_FORM_SUCCESS: 
            return action.data;
        case types.LOGOUT:
            localStorage.removeItem('auth-token');
            return {};
        default:
            return state;
    }
};