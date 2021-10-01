import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countrywise from '../components/Countrywise';
import Scoreheader from '../components/Scoreheader';
import WorldwideInvidual from '../components/WorldwideInvidual';

const Scoreboard = () => {
    return (
        <Router>
            <Scoreheader/>
        <Switch>
    
       
          <Route path='/Scoreboard/countrywise'>
          <Countrywise/>
          </Route>
    
          <Route path='/Scoreboard/WorldwideInvidual'>
          <WorldwideInvidual/>
          </Route>
    
    
        </Switch>
      </Router>

    )
}

export default Scoreboard
