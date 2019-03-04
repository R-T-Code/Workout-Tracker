import React from 'react';
import {Route} from 'react-router-dom';
import Templates from './Templates/Templates';
import NewTemplate from './NewTemplate/NewTemplate';
import CurrentTemplate from './CurrentTemplate/CurrentTemplate';
import CurrentWorkout from './CurrentWorkout/CurrentWorkout';
import History from './History/History';
import HistoryWorkout from './HistoryWorkout/HistoryWorkout';

const App = (props) => {
    return (
        <div>
            <Route path='/' exact component={Templates}/>
            <Route path='/new-template' exact component={NewTemplate}/>
            <Route path='/template/:template/:action' component={CurrentTemplate}/>
            <Route path='/workout/:name' component={CurrentWorkout}/>
            <Route path='/history' exact component={History}/>
            <Route path='/history/workout/:id' exact component={HistoryWorkout}/>
        </div>
    );
};

export default App;