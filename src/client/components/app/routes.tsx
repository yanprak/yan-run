import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  Contact,
  Forum,
  Game,
  Home,
  Leaderboard,
  NotFound,
  Profile,
  Signin,
  Signup,
  Topic,
} from '../../pages';

export default function getRoutes(isAuthenticated: boolean) {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={Game} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/topic" component={Topic} />
        <Route path="/forum" component={Forum} exact />
        <Route path="/leaderboard" component={Leaderboard} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/signin" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/signup" exact>
          <Redirect to="/" />
        </Route>
        {/* remove */}
        <Route path="/cool" exact>
          <div>
            cool
          </div>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signin" />
    </Switch>
  );
}
