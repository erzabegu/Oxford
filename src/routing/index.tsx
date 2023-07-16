import { HomePage } from '@oxford/pages';
import { useRoutes } from 'react-router-dom';

const Routing = () => {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <h2>not found</h2>,
    },
  ]);
  return routing;
};
export default Routing;
