
import React, { Component, Fragment } from 'react';
import style from './index.module.scss';
import Heading1 from '../../common/Heading1/Heading1';
import { connect } from 'react-redux'
import * as templatesActions from '../../../actions/templates';
import * as workoutActions from '../../../actions/workout';
import {Redirect} from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';

const actions = {...templatesActions, ...workoutActions};

 class CurrentWorkout extends Component {
    state = {
      exc: [],
      mood: '',
      confirmation: false
    }

    // onMoodChange = (e) =>{this.setState({mood: e.target.value})}

    componentDidMount(){
      // Create and array in state with as many object as exercises
      const exc = this.props.exercises.map(() => ({weight:'', reps: '', height: 0}));
      console.log(exc);
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
    if(!props.currentWorkout) return <Redirect to='/'/>
    
    const exc = props.exercises.map((item, i) => {
      const weight = this.state.exc[i] ? this.state.exc[i].weight: '';
      const reps = this.state.exc[i] ? this.state.exc[i].reps: '';
      const height = this.state.exc[i] ? this.state.exc[i].height : 0;

      const sets = item.sets.map((set, i)=>{
        return (
          <li key={i}>{set.weight}kg / {set.reps}x / <span >del</span></li>
        )
      })

      return (
        <Fragment key={i}>
          <div>
            <h3 onClick={() => this.toggleSets(i)} >{item.name}</h3>
          </div>
          <AnimateHeight duration={300} height={height}>
          <nav>
            <input className={style.input}
                   name='weight'
                   type="text"
                   onChange={(e)=>this.onInputChange(e,i)}
                   value={weight} 
                   placeholder='weight'/>
            <input className={style.input}
                   name='reps'
                   type="text" 
                   onChange={(e)=>this.onInputChange(e,i)}
                   value={reps} 
                   placeholder='reps'/>
            <button onClick={()=>{
              this.props.addSet(item.name, weight,reps);
              this.clearFields(i);
            }} className={style.button}>Add</button>
          </nav>
            <ul >
              {sets}
            </ul>
          </AnimateHeight>
        </Fragment>
      )
    })
    return (
      <div className={style.current}>
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
            confirm={()=>props.finishWorkout(props.currentWorkout.name, props.exercises, props.history)}
            cancel={this.cancel}
            show={this.state.confirmation}>
            Finish Workout?
          </ConfirmationModal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    currentWorkout: state.currentWorkout,
    exercises: state.exercises
})



export default connect(mapStateToProps, actions)(CurrentWorkout);