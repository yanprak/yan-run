import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  Game,
  Profile,
  SignIn,
  SignUp,
  Forum,
  Leaderboard,
} from '../../pages';
import Header from '../header';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Forum} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    </Router>
  );
}
