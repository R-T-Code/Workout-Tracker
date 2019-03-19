import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';
import style from './index.module.scss';

 class History extends Component {
     state = {
         workouts: null,
         edit: false
     };

     componentDidMount = async () => {
         try {
             const res = await axios.get('/api/workouts');
             this.setState({workouts: res.data});
         } catch (e){
            console.log(e.response);
         }
     }
     toggleEdit = () => this.setState({edit: !this.state.edit});

     deleteWorkout = async (id) => {
        try{
          // delete from backend
          await axios.delete('/api/workouts/'+id);

          // delete from front end
          const workouts = this.state.workouts.filter(workout =>  workout._id !== id);
          this.setState({workouts});
        } catch(e) {
          console.log(e.response);
        }
     }


  render() {
      const workouts = this.state.workouts && this.state.workouts.map((workout, i)=>{
          return (
              <div 
                className={style.entry}
                key={i}>
                  <Link to={`/history/workout/`+workout._id}> {workout.name}</Link>
                <span className={style.date}> {moment(workout.createdAt).format('YYYY MM DD')}</span>
                {this.state.edit && <small className={style.close} onClick={() => this.deleteWorkout(workout._id)}>x</small>}
              </div>
          )
      });
    return (
      <ContentWrapper>
        <h1 className={style.heading}>History <span onClick={this.toggleEdit} className={style.edit}>Edit</span></h1>
        {workouts}
      </ContentWrapper>
    )
  }
}

export default History;