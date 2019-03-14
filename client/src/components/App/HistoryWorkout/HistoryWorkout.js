import React, { Component } from 'react';
import axios from 'axios';
import style from './index.module.scss';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';

class HistoryWorkout extends Component {

    state = {
        workout: null
    }
    componentDidMount = async () => {
        try {
            const res = await axios.get('/api/workouts/'+this.props.match.params.id);
            this.setState({workout: res.data});
        } catch (e){
            console.log(e.response)
        }
        
    };
  render() {
      const {state} = this;
    if(!this.state.workout) return <div>...loading</div>
    const exercises = state.workout.exercises.map((exc,i)=>{
        const sets = exc.sets.map((set, index)=>{
            return (
                <li key={index}>{set.weight} kg - {set.reps}x</li>
            )
        })
        return (
            <div key={i} className={style.entry}>
                <p className={style.excName}>{exc.name}</p>
                <ol type="I" className={style.list}>
                    {sets}
                </ol>
            </div>
        )
    })

    return (
      <ContentWrapper>
          <h1 className={style.heading}>{state.workout.name}</h1>
        {exercises}
      </ContentWrapper>
    )
  }
}

export default HistoryWorkout;
