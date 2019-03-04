import React, {Component} from 'react';
import Heading1 from '../../common/Heading1/Heading1';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../../actions/templates';
import Error from '../../common/Error/Error';


class NewTemplate extends Component {
    state={
        name: '',
        error:''
    }

    onInputChange = e => this.setState({name: e.target.value});

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name) return;

        // Check for dublicates
        const match = this.props.templates.list.filter(item => {
            return item.name.toLowerCase() === this.state.name.toLowerCase();
        });
        if(match.length>0) return this.setState({error: 'This workout already exsists'})


        // add workout to redux workouts state part
        const name = this.state.name.replace(/\//g, '-');
        this.props.createTemplate(name);

        // Redirect to current workout
        this.props.history.push('/template/'+name+'/create');
    }

    render(){
        return (
            <div className={style.new}>
                <Heading1 >Name your workout</Heading1>
                <form onSubmit={this.onFormSubmit} className={style.form}>
                    <input 
                        value={this.state.name}
                        onChange={this.onInputChange}
                        className={style.input}
                        type='text' 
                        placeholder='workout name'
                        name='name'
                        autoComplete='new-name'/>
                    <button className={style.button}>Create</button>
                    <Error error={this.state.error}/>
                </form>
                <small className={style.small}>Ex.: Chest Day, Bicep/Tricep, Legs</small>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    templates: state.templates
})



export default connect(mapStateToProps, actions)(NewTemplate);