import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';
import { LoginPage } from '../pages/LoginPage';
import { TaskPage } from '../pages/TaskPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import config from "../../config.json"

const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => <Navigate to={config.homeUrl} />,
  },
  {
    path: '/home',
    exact: true,
    layout: DefaultLayout,
    element: HomePage,
  },
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    element: LoginPage,
  },
  {
    path: '/register',
    exact: true,
    layout: DefaultLayout,
    element: RegistrationPage,
  },
  {
    path: '/tasks',
    exact: true,
    layout: DefaultLayout,
    element: TaskPage,
  },
];

export default publicRoutes;