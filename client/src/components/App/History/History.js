import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

 class History extends Component {
     state = {
         workouts: null
     };

     componentDidMount = async () => {
         try {
             const res = await axios.get('/api/workouts');
             this.setState({workouts: res.data});
         } catch (e){
            console.log(e.response);
         }
     }


  render() {
      const workouts = this.state.workouts && this.state.workouts.map((workout, i)=>{
          return (
              <Link to={`/history/workout/`+workout._id} key={i}>{workout.name}
                <span>{moment(workout.createdAt).format('YYYY MM DD')}</span>
              </Link>
          )
      })
    return (
      <div>
        <h1 >History</h1>
        {workouts}
      </div>
    )
  }
}

export default History;