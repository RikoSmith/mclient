import Dashboard from '../layouts/Dashboard/Dashboard.jsx';
import Landing from '../layouts/Landing/Landing.jsx';

var indexRoutes = [
  { path: '/', name: 'Home', component: Landing },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default indexRoutes;
