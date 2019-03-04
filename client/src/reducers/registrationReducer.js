import * as types from '../actions/types';

const initialState = {
    name:'',
    email:'',
    password:'',
    errors: {},
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTRATION_INPUT_CHANGE:
            return {...state, [action.name]: action.value};
        case types.REGISTRATION_FORM_ERROR:
            return {...state, errors: action.errors}
        default:
            return state;
    }
};