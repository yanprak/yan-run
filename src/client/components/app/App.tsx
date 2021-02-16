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
  Signin,
  Signup,
  Forum,
  Leaderboard,
  NotFound,
  Topic,
} from '../../pages';
import Header from '../header';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/topic" component={Topic} />
          <Route path="/forum" component={Forum} exact />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
