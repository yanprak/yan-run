import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/game">Game</Link></li>
              <li><Link to="/signin">Вход</Link></li>
              <li><Link to="/signup">Регистрация</Link></li>
              <li><Link to="/profile">Профиль</Link></li>
              <li><Link to="/forum">Форум</Link></li>
              <li><Link to="/leaderboard">Рйтинг / top 10</Link></li>
            </ul>
          </nav>
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
    </div>
  );
}
