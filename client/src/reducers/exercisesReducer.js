import * as types from '../actions/types';

export default (state=[], action)=>{
    switch(action.type){
        case types.START_WORKOUT:{
            return action.template.exercises;
        }
        case types.LOAD_EXERCISES: {
            return action.data
        }
        case types.ADD_SET:{
            const  newState = state.map((exc) => {
                if(exc.name !== action.name){
                    return exc
                } else {
                    const {weight, reps} = action;
                    return {...exc, sets:[...exc.sets, {weight, reps}]};
                }
            });
            localStorage.setItem('exercises', JSON.stringify(newState));
            return newState;
        }
        case types.DELETE_SET: {
            const newState = state.map((exercise, i) => {
                if(i === action.excIndex){
                    const sets = exercise.sets.filter((n, i) => i !== action.setIndex);
                    return {...exercise, sets};
                } else {
                    return exercise;
                }
            });
            localStorage.setItem('exercises', JSON.stringify(newState));
            return newState;
        }
        default:
    return state
    }
}