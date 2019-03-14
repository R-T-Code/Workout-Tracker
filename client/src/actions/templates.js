import * as types from './types';
import axios from 'axios';

export function createTemplate(name){
  return {
    type: types.TEMPLATES_CREATE,
    name
  }
}

export function deleteTemplate(name, history){
  // Delete local storage only if name is === to current template name
  if(localStorage.getItem('workout') === name){
    localStorage.removeItem('exercises');
    localStorage.removeItem('workout');
  }

 return async function(dispatch){
   try{
    await axios.delete('/api/templates/'+name);
    dispatch({
        type: types.TEMPLATES_DELETE,
        name
    });
    history.push('/');
   } catch (e){
      console.log(e.response);
      dispatch({
        type: types.TEMPLATES_ERROR
      })
   }
 }
}

export function addExc(workout, exc){
  return{
    type: types.TEMPLATES_ADD_EXERCISE,
    workout,
    exc
  }
}

export function deleteExc(workout, exc){
  return {
    type: types.TEMPLATES_DELETE_EXERCISE,
    workout,
    exc
  }
}

export function fetchTemplates(){
 return async function(dispatch){
   try{
    const res = await axios.get('/api/templates');
    dispatch({
      type: types.TEMPLATES_FETCH,
      templates: res.data
    })
   } catch (e){
    console.log(e.response);
    dispatch({
      type: types.TEMPLATES_ERROR
    })
   }
 } 
}

export function fetchOneTemplate(name){
  return async function(dispatch){
    try {
      const res = await axios.get('/api/templates/'+name);
      dispatch({
        type: types.TEMPLATES_FETCH,
        templates: res.data
      })
    } catch (e){
      console.log(e.response);
      dispatch({
        type: types.TEMPLATES_ERROR
      })
    }
  }
}

export function saveTemplate(template, history){
  return async function (dispatch){
    try{
      await axios.post('/api/templates', template);
      dispatch({
        type: types.TEMPLATES_SAVED
      });
      history.push('/');
    } catch (e) {
      console.log(e.response);
      dispatch({
        type: types.TEMPLATES_ERROR
      })
    }
  }
}

export function updateTemplate(template, history){

  // Update local storage with new exercises data
  const savedExercises = JSON.parse(localStorage.getItem('exercises'));
  if(savedExercises){
    const data = [];
    template.exercises.forEach((item, i) => {
        let sets = [];
        if(savedExercises[i]) sets = savedExercises[i].sets;
        data.push({...item, sets});
      });
      localStorage.setItem('exercises', JSON.stringify(data));
  }


  return async function (dispatch){
    try{
      await axios.put('/api/templates', template);
      dispatch({
        type: types.TEMPLATES_SAVED
      });
      history.push('/');
    } catch (e) {
      console.log(e.response);
      dispatch({
        type: types.TEMPLATES_ERROR
      })
    }
  }
}
