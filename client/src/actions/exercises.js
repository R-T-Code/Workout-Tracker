import * as types from './types';

export function createExc(name, workout){
    return {
        type: types.EXERCISES_CREATE,
        name,
        workout
    }
}

export function loadExercises(data){
    return{
        type: types.LOAD_EXERCISES,
        data
    }
}

