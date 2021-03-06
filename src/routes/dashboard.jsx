import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import TableList from '../views/TableList/TableList';
import Typography from '../views/Typography/Typography';
import Icons from '../views/Icons/Icons';
import Maps from '../views/Maps/Maps';
import Notifications from '../views/Notifications/Notifications';
import Upgrade from '../views/Upgrade/Upgrade';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/dashboard/user',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/dashboard/table',
    name: 'Table List',
    icon: 'pe-7s-note2',
    component: TableList
  },
  {
    path: '/dashboard/typography',
    name: 'Typography',
    icon: 'pe-7s-news-paper',
    component: Typography
  },
  {
    path: '/dashboard/icons',
    name: 'Icons',
    icon: 'pe-7s-science',
    component: Icons
  },
  {
    path: '/dashboard/maps',
    name: 'Maps',
    icon: 'pe-7s-map-marker',
    component: Maps
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

export default dashboardRoutes;
