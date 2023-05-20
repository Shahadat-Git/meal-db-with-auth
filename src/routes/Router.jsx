import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import MealDetails from '../components/MealDetails';
import ViewCart from '../components/ViewCart';
import CompleteOrder from '../components/CompleteOrder';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../components/ForgotPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forgotpassword',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/viewcart',
                element: <PrivateRoute><ViewCart></ViewCart></PrivateRoute>
            },
            {
                path: '/ordercomplete',
                element: <PrivateRoute><CompleteOrder></CompleteOrder></PrivateRoute>
            },
            {
                path: '/meal/:id',
                element: <MealDetails></MealDetails>,
                loader: ({ params }) => params.id,
            }
        ]
    }
])

export default router;