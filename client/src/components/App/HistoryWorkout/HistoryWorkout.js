import React, { Component } from 'react';
import axios from 'axios';

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
                <li key={index}>{set.weight} kg / {set.reps} x</li>
            )
        })
        return (
            <div key={i}>
                <h2 >{exc.name}</h2>
                <ul >
                    {sets}
                </ul>
            </div>
        )
    })

    return (
      <div>
          <h1 >{state.workout.name}</h1>
        {exercises}
      </div>
    )
  }
}

export default HistoryWorkout;
