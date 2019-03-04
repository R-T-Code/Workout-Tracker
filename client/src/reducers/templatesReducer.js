import * as types from '../actions/types';


const initialState = {
    loading: false,
    error: false,
    list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEMPLATES_CREATE:
        return {...state, list: [...state.list, {name: action.name, exercises:[]}]}
    case types.TEMPLATES_DELETE:
        const list = state.list.filter(item => item.name !== action.name);
        return {...state, list} 
    case types.TEMPLATES_ADD_EXERCISE: {
        const list = state.list.map(item => {
            if(item.name === action.workout){
                return {...item, exercises:[...item.exercises, {name: action.exc, sets:[]}]}
            } else {
                return item
            }
        });
        return {...state, list};
    }
    case types.TEMPLATES_DELETE_EXERCISE: {
        const list = state.list.map(item => {
            if(item.name === action.workout){
                const exercises = item.exercises.filter(exc => exc.name !== action.exc);
                return {...item, exercises};
            } else {
                return item;
            }
        });
        return {...state, list}
    }
    case types.TEMPLATES_FETCH: {
        return {...state, list:action.templates}
    }
    case types.LOGOUT: {
        return initialState;
    }
  default: return state
  }
}
