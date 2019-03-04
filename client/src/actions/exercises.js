import * as types from './types';

export function createExc(name, workout){
    return {
        type: types.EXERCISES_CREATE,
        name,
        workout
    }
}