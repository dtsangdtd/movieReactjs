import HomePage from '../containers/HomeTemplate/HomePage';
import AboutPage from '../containers/HomeTemplate/AboutPage';
import ListMoviePage from '../containers/HomeTemplate/ListMoviePage';
import DetailPage from '../containers/HomeTemplate/DetailPage';
import HocPage from '../containers/HomeTemplate/HocPage';
import DashBoardPage from '../containers/AdminTemplate/DashBoardPage';
import UserPage from '../containers/AdminTemplate/UserPage';
import HookPage from '../containers/HomeTemplate/Hook';
import MaterialPage from '../containers/HomeTemplate/MaterialPage';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/about',
    component: AboutPage,
  },
  {
    exact: false,
    path: '/list-movie',
    component: ListMoviePage,
  },
  {
    exact: false,
    path: '/detail/:id',
    component: DetailPage,
  },
  {
    exact: false,
    path: '/hoc',
    component: HocPage,
  },
  {
    exact: false,
    path: '/hook',
    component: HookPage,
  },
  {
    exact: false,
    path: '/material',
    component: MaterialPage,
  },
];
const routesAdmin = [
  {
    exact: false,
    path: '/dashboard',
    component: DashBoardPage,
  },

  {
    exact: false,
    path: '/user',
    component: UserPage,
  },
];
export { routesHome, routesAdmin };
