import {
  Contact,
  Forum,
  Game,
  Home,
  Leaderboard,
  NotFound,
  Profile,
  Topic,
} from '../pages';

const routes = [
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
    path: '/forum/topics/:id/:page',
    component: Topic,
    exact: true,
  },
  {
    path: '/forum/topics/:id',
    component: Topic,
    exact: true,
  },
  {
    path: '/forum',
    component: Forum,
    exact: true,
  },
  {
    path: '/forum/:page',
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
    exact: true,
  },
  {
    path: '/signup',
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
  },
];

export default routes;
