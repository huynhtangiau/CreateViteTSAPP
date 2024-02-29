import { createBrowserRouter } from 'react-router-dom';
import UserInputPage from './pages/user/_userInput';
import HomePage from './pages/home';
import FormikLoginPage from './pages/login/_loginInput';

const routers = createBrowserRouter([
    {
        path: '/user',
        element: <UserInputPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <FormikLoginPage />,
    },
]);
export default routers;
