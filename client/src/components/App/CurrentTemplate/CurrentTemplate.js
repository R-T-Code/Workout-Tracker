import React, { Component, Fragment } from 'react';
import style from './index.module.scss';
import Heading1 from '../../common/Heading1/Heading1';
import { connect } from 'react-redux'
import * as actions from '../../../actions/templates';
import Button1 from '../../common/Button1/Button1';
import ContentWrapper from '../../common/ContentWrapper/ContentWrapper';



 class CurrentWorkout extends Component {
    state={
        name: ''
    }

    componentDidMount(){
        // check if we have fetched templates
        if(this.props.templates.list.length > 0) return;
        this.props.fetchOneTemplate(this.props.match.params.template);
    }

    onInputChange = e => this.setState({name: e.target.value});

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name) return;
        
        this.props.addExc(this.props.match.params.template, this.state.name);
        this.setState({name: ''});
    }

  render() {
    const [template] = this.props.templates.list.filter(temp => temp.name === this.props.match.params.template);
    const exc = template && template.exercises.map((exc, index) => {
                return (
                    <div key={index} className={style.exc}>
                        <h3 className={style.name}>{exc.name}</h3>
                        <button className={style.delete} onClick={()=>this.props.deleteExc(template.name, exc.name)}>X</button>
                    </div>
                )
            });
    const editButtons = (
        <Fragment>
            <button className={style.btn_update} onClick={()=>this.props.updateTemplate(template, this.props.history)}>Update</button>
            <button className={style.btn_delete} onClick={()=>this.props.deleteTemplate(template.name, this.props.history)}>Delete</button>
        </Fragment>
    )
    const createButtons = (
        <Fragment>
            <button className={style.create} onClick={()=>this.props.saveTemplate(template, this.props.history)}>Create</button>
        </Fragment>
    )
    return (
      <ContentWrapper>
          <Heading1 >Add exercises to {this.props.match.params.template}</Heading1>
            <form onSubmit={this.onFormSubmit} className={style.form}>
                <label 
                    htmlFor="exercise-name"
                    className={style.label}>Exercise Name</label>
                <input 
                    id="exercise-name"
                    placeholder="Ex. Bench Press, Bicep Curl, Squats"
                    value={this.state.name}
                    onChange={this.onInputChange}
                    className={style.input}
                    type='text' 
                    name='name'
                    autoComplete='new-name'/>
                <Button1 className={style.button}>Add</Button1>
            </form>
                {this.props.templates.list.length === 0 ? <div>Loading</div> : exc}
                {this.props.match.params.action === 'edit' ? editButtons : createButtons}   
      </ContentWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
    templates: state.templates
})



export default connect(mapStateToProps, actions)(CurrentWorkout);