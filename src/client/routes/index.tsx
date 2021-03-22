import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Signin, Signup } from '../pages';
import routes from './routes';
import OauthYa from '../components/authYa/OauthYa';

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
      <Route path="/" component={OauthYa} exact />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signin" />
    </Switch>
  );
}
