import { createBrowserRouter } from 'react-router-dom';
import FormInputPage from './pages/formInput';
import HomePage from './pages/home';

const routers = createBrowserRouter([
    {
        path: '/form',
        element: <FormInputPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
]);
export default routers;
