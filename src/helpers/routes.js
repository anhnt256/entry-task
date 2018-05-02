import Home from '../containers/homeContainer';
import Events from '../containers/eventContainer';

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Events
  }
];
