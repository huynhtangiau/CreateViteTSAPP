import { createBrowserRouter } from 'react-router-dom';
import UserInputPage from './pages/user/_userInput';
import HomePage from './pages/home';
import FormikLoginPage from './pages/login/_loginInput';
import { PeopleComponentPage } from './pages/person/people';

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
    {
        path: '/people',
        element: <PeopleComponentPage />,
    },
]);
export default routers;
