import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Challenges from './pages/Challenges';
import Donation from './pages/Donation';
import Map from "./pages/Map";
import Profile from './pages/Profile';
import Scoreboard from './pages/Scoreboard';
function App() {
  return (
  <Router>
    <Header/>
    <Switch>

   
      <Route path='/profile'>
      <Profile/>
      </Route>

      <Route path='/Challenges'>
      <Challenges/>
      </Route>
      <Route path='/Scoreboard'>
      <Scoreboard/>
      </Route>
      <Route path='/Map'>
      <Map/>
      </Route>
      <Route path='/donation'>
      <Donation/>
      </Route>
      <Route>
        <Link  exact to ='/'>Root</Link>
      </Route>

    </Switch>
  </Router>
  );
}

export default App;
