import {createStore, combineReducers,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Import reducers
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import templatesReducer from './templatesReducer';
import currentWorkoutReducer from './currentWorkoutReducer';
import exercisesReducer from './exercisesReducer';

const rootReducer = combineReducers({
  auth:authReducer,
  registration:registrationReducer,
  login: loginReducer,
  templates: templatesReducer,
  currentWorkout: currentWorkoutReducer,
  exercises: exercisesReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));

export default store;