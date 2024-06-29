import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import config from "../../config.json"

const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => <Navigate to={config.homeUrl} />,
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
 
];

export default publicRoutes;