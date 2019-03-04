import * as types from '../actions/types';

export default (state=[], action)=>{
    switch(action.type){
        case types.START_WORKOUT:{
            return action.template.exercises;
        }
        case types.ADD_SET:{
            //[{name: 'squats', sets:[{weight: 100}, reps:100]}]
            return state.map((exc) => {
                if(exc.name !== action.name){
                    return exc
                } else {
                    const {weight, reps} = action;
                    return {...exc, sets:[...exc.sets, {weight, reps}]};
                }
            })
        }
        default:
    return state
    }
}