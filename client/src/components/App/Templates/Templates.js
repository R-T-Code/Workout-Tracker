import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import style from './index.module.scss';
import { connect } from 'react-redux'
import Heading1 from '../../common/Heading1/Heading1';
import * as templateActions from '../../../actions/templates';
import * as workoutActions from '../../../actions/workout';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';
import Welcome from '../Welcome/Welcome';
import Button1 from '../../common/Button1/Button1';
import WarningModal from '../../common/WarrningModal/WarningModal';

const actions = {...templateActions, ...workoutActions};

class Templates extends Component {
  state = {
    warning: false
  }

  toggleWarning = () => {
    this.setState({warning: !this.state.warning});
  };

  componentDidMount(){
    this.props.fetchTemplates()
  }
  render() {
      const {props} = this;

      // If props.templates.list === 0 print the welcome msg and tutorials
      const welcome = props.templates.list.length === 0 && <Welcome />

      const templates = props.templates.list.map((template) => {
          return (
              <div key={template.name} className={style.template}>
                  <div onClick={()=>{
                    const name = localStorage.getItem('workout');
                    if(name && template.name !== name){
                        this.toggleWarning()
                    }else {
                        props.history.push('/workout/'+template.name);
                        props.startWorkout(template);
                    }
                  }} className={style.name} >{template.name}
                  </div>
                  <Link to={'/template/'+template.name+'/edit'}className={style.edit}>Edit</Link>
              </div>
          )
      })
    return (
      <div className={style.templates}>
        <ContentWrapper>
          <Heading1 >Choose Your Workout</Heading1>
            {templates}
          <Link to='/new-template' className={style.create}><Button1>Create New Workout</Button1></Link>  
          <WarningModal show={this.state.warning} hideModal={this.toggleWarning}> 
                    You must complete your {localStorage.getItem('workout')} workout
                  </WarningModal>
        </ContentWrapper>
        {welcome}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  templates:  state.templates
})



export default connect(mapStateToProps, actions)(Templates);
