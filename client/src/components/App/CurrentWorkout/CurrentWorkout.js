
import React, { Component, Fragment } from 'react';
import style from './index.module.scss';
import Heading1 from '../../common/Heading1/Heading1';
import { connect } from 'react-redux'
import * as templatesActions from '../../../actions/templates';
import * as workoutActions from '../../../actions/workout';
import * as exercisesActions from '../../../actions/exercises';
import AnimateHeight from 'react-animate-height';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';

const actions = {...templatesActions, ...workoutActions, ...exercisesActions};

 class CurrentWorkout extends Component {
    state = {
      exc: [],
      mood: '',
      confirmation: false
    }

    // onMoodChange = (e) =>{this.setState({mood: e.target.value})}

    componentDidMount(){
      // Check localStorage for current workout
      let exc = localStorage.getItem('exercises');
      const name = localStorage.getItem('workout');
      if(name === this.props.match.params.name && exc){
          exc = JSON.parse(exc).map(item => {
              return {...item, weight:'', reps: ''};
          });

          this.props.loadWorkoutName(name)
          this.props.loadExercises(exc);
      }

      if(!exc) {
        if(this.props.exercises.length ===0) this.props.history.push('/');
        exc = this.props.exercises.map(() => ({weight:'', reps: '', height: 0}));
      }
      this.setState({exc});
    }

    onInputChange = (e,i) => {
      const exc = [...this.state.exc];
      exc[i][e.target.name] = e.target.value;
      this.setState({exc});
    }

    clearFields = (i) =>{
      const exc = this.state.exc.map((exc, index) => {
        if(i === index){
          return {weight: '', reps: '', height: 'auto'}
        } else {
          return exc;
        }
      });
      this.setState({exc});
    }

    toggleSets = (i) =>{
      const exc = this.state.exc.map((exc, index) => {
        if(i === index){
          return {...exc, height: exc.height === 0 ? 'auto' : 0}
        } else {
          return exc;
        }
      });
      this.setState({exc});
    }

    confirm = () => this.setState({confirmation: true})

    cancel = () => this.setState({confirmation: false})

 
  
  render() {
    const {props} = this;
    
    const exc = props.exercises.map((item, i) => {
      const weight = this.state.exc[i] ? this.state.exc[i].weight: '';
      const reps = this.state.exc[i] ? this.state.exc[i].reps: '';
      const height = this.state.exc[i] ? this.state.exc[i].height : 0;

      const sets = item.sets.map((set, index)=>{
        return (
          <li key={index}>{set.weight}kg / {set.reps}x / <span onClick={() => this.props.deleteSet(i, index)}>del</span></li>
        )
      });

      return (
        <Fragment key={i}>
          <div className={style.exercise}>
            <h3 className={style.exercise_name} onClick={() => this.toggleSets(i)} >{item.name}</h3>
          
          <AnimateHeight duration={300} height={height}>
          <nav>
            <div className={style.input_container}>
            <label className={style.label} htmlFor="weight">Weight</label>
            <input 
                   id="weight"
                   className={style.input}
                   name='weight'
                   type="text"
                   onChange={(e)=>this.onInputChange(e,i)}
                   value={weight}/>
            </div>
            <div className={style.input_container}>
            <label className={style.label} htmlFor="reps">Repetitions</label>
            <input className={style.input}
                   id="reps"
                   name='reps'
                   type="text" 
                   onChange={(e)=>this.onInputChange(e,i)}
                   value={reps}/>
            </div>
            <button onClick={()=>{
              this.props.addSet(item.name, weight,reps);
              this.clearFields(i);
            }} className={style.add}>Add</button>
          </nav>
            <ul >
              {sets}
            </ul>
          </AnimateHeight>
          </div>
        </Fragment>
      )
    })
    return (
      <ContentWrapper>
          <Heading1 >{this.props.match.params.name}</Heading1>
          {exc}
          {/* <label htmlFor="mood">How do You feel?</label>
          <input
            onChange={this.onMoodChange} 
            value={this.state.mood}
            id="mood"
            type="text" 
            placeholder="best workout ever!"/> */}
          <button 
            onClick={this.confirm} 
            className={style.btnFinish}
            >End Workout</button>
          <ConfirmationModal 
            confirm={()=>{
              props.finishWorkout(props.currentWorkout.name, props.exercises, props.history);
              localStorage.removeItem('exercises');
              localStorage.removeItem('workout');
            }}
            cancel={this.cancel}
            show={this.state.confirmation}>
            Finish Workout?
          </ConfirmationModal>
      </ContentWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
    currentWorkout: state.currentWorkout,
    exercises: state.exercises
})



export default connect(mapStateToProps, actions)(CurrentWorkout);