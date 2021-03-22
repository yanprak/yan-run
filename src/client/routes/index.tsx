import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Signin, Signup } from '../pages';
import routes from './routes';
import AuthYa from '../components/authYa/AuthYa';

export default function getRoutes(isAuthenticated: boolean) {
  if (isAuthenticated) {
    return (
      <Switch>
        {routes.map(({ ...routeProps }) => {
          if (routeProps.component) {
            return (
              <Route key={routeProps.path} {...routeProps} />
            );
          }
          return (
            <Route key={routeProps.path} {...routeProps}>
              <Redirect to="/" />
            </Route>
          );
        })}
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={AuthYa} exact />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signin" />
    </Switch>
  );
}
