import * as types from '../actions/types';


export default (state = null, action) => {
  switch (action.type) {
    case types.START_WORKOUT:
        const {name} = action.template
        return {name}
  default:
    return state
  }
}
