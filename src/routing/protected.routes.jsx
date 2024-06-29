import DefaultLayout from '../layouts/Default.layout';
import { TaskPage } from '../pages/TaskPage';
import { HomePage } from '../pages/HomePage';
import { CalculatorPage } from '../pages/CalculatorPage';


const protectedRoutes = [
  {
    path: '/home',
    exact: true,
    layout: DefaultLayout,
    element: HomePage,
  },
  {
    path: '/tasks',
    exact: true,
    layout: DefaultLayout,
    element: TaskPage,
  },
  {
    path: '/calculator',
    exact: true,
    layout: DefaultLayout,
    element: CalculatorPage,
  },
];

export default protectedRoutes;