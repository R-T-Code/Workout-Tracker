import * as types from '../actions/types';


export default (state = null, action) => {
  switch (action.type) {
    case types.START_WORKOUT:
        const {name} = action.template
        return {name}
    case types.ADD_SET:
        localStorage.setItem('workout', state.name);
        return state;
    case types.LOAD_WORKOUT_NAME:
        return {name: action.name}
  default:
    return state
  }
}
