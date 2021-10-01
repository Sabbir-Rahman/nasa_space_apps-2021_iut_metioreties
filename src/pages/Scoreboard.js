import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countrywise from '../components/Countrywise';
import Scoreheader from '../components/Scoreheader';
import Worldwide from '../components/Worldwide';

const Scoreboard = () => {
    return (
        <Router>
            <Scoreheader/>
        <Switch>
    
       
          <Route path='/Scoreboard/countrywise'>
          <Countrywise/>
          </Route>
    
          <Route path='/Scoreboard/Worldwide'>
          <Worldwide/>
          </Route>
    
    
        </Switch>
      </Router>

    )
}

export default Scoreboard
