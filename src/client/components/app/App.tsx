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
  LeaderboardPage,
  NotFound,
  Topic,
  Contact,
} from '../../pages';

import Header from '../header';
import ErrorBoundary from '../error-boundary';

export default function App() {
  return (
    <ErrorBoundary>
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
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
