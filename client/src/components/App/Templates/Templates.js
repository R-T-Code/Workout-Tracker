import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import style from './index.module.scss';
import { connect } from 'react-redux'
import Heading1 from '../../common/Heading1/Heading1';
import * as templateActions from '../../../actions/templates';
import * as workoutActions from '../../../actions/workout';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';
import ItemTemplate from '../../common/ItemTemplate/ItemTemplate';

const actions = {...templateActions, ...workoutActions};

class Templates extends Component {
  componentDidMount(){
    this.props.fetchTemplates()
  }
  render() {
      const {props} = this;
      const templates = props.templates.list.map((template) => {
          return (
              <ItemTemplate  key={template.name}>
                  <div onClick={()=>{
                    props.history.push('/workout/'+template.name);
                    props.startWorkout(template);
                  }} className={style.name} >{template.name}
                  </div>
                  <Link to={'/template/'+template.name+'/edit'}className={style.delete}>Edit</Link>
              </ItemTemplate>
          )
      })
    return (
      <div className={style.templates}>
        <ContentWrapper>
          <Heading1 >Choose Your Workout</Heading1>
            {templates}
          <Link to='/new-template' className={style.create}>Create New Workout</Link>  
        </ContentWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  templates:  state.templates
})



export default connect(mapStateToProps, actions)(Templates);
