import * as types from './types';
import axios from 'axios';

export function startWorkout(template){
    return {
        type:types.START_WORKOUT,
        template
    }
}

export function addSet(name, weight, reps){
    return{
        type: types.ADD_SET,
        name,
        weight,
        reps
    }
}

export function finishWorkout(name, exercises, history){
    return async function(dispatch){
        try {
            const res = await axios.post('/api/workouts', {name, exercises, duration: 123});
            history.push('/');
            dispatch({
                type: types.FINISH_WORKOUT,
                message: 'workout finished!'
            })
        } catch(e) {
            console.log(e.response);
            dispatch({
                type: types.WORKOUT_ERROR
            })
        }
    }
}   

// export function onMoodChange(e){
//     return{
//         types: types.ON_MOOD_CHANGE,
//         value: e.target.value
//     } 
// }