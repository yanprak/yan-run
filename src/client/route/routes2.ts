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
} from '../pages';

const routes2 = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/game',
    component: Game,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/topic',
    component: Topic,
    exact: true,
  },
  {
    path: '/forum',
    component: Forum,
    exact: true,
  },
  {
    path: '/leaderboard',
    component: Leaderboard,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/signin',
    component: Signin,
    exact: true,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export default routes2;
