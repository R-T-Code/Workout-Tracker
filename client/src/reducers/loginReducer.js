import * as types from '../actions/types';


const initialState = {
    email: '',
    password: '',
    loading: false,
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_INPUT_CHANGE:
            return {...state, [action.name]: action.value}
        case types.LOGIN_FORM_ERROR:
            return {...state, errors: action.errors};
        default:
            return state;
    }
};