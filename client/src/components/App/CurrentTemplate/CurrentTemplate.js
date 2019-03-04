import React, { Component, Fragment } from 'react';
import style from './index.module.scss';
import Heading1 from '../../common/Heading1/Heading1';
import { connect } from 'react-redux'
import * as actions from '../../../actions/templates';


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
                        <h3 >{exc.name}</h3>
                        <button className={style.button} onClick={()=>this.props.deleteExc(template.name, exc.name)}>X</button>
                    </div>
                )
            });
    const editButtons = (
        <Fragment>
            <button className={style.button} onClick={()=>this.props.updateTemplate(template, this.props.history)}>Update</button>
            <button className={style.button} onClick={()=>this.props.deleteTemplate(template.name, this.props.history)}>Delete</button>
        </Fragment>
    )
    const createButtons = (
        <Fragment>
            <button className={style.button} onClick={()=>this.props.saveTemplate(template, this.props.history)}>Create</button>
        </Fragment>
    )

    return (
      <div className={style.current}>
          <Heading1 >Add exercises to {this.props.match.params.template}</Heading1>
            <form onSubmit={this.onFormSubmit} className={style.form}>
                <input 
                    value={this.state.name}
                    onChange={this.onInputChange}
                    className={style.input}
                    type='text' 
                    placeholder='exercise name'
                    name='name'
                    autoComplete='new-name'/>
                <button className={style.button}>Add</button>
            </form>
                <small >Ex. Bench Press, Bicep Curl, Squats</small>
                {this.props.templates.list.length===0 ? <div>Loading</div> : exc}
                {this.props.match.params.action === 'edit' ? editButtons : createButtons}   
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    templates: state.templates
})



export default connect(mapStateToProps, actions)(CurrentWorkout);