import {Redirect} from 'react-router-dom';
import { lazy } from 'react';

export default [
    {
        path: '/home',
        component: lazy(()=>import('../pages/home'))
    },
    {
        path: '/detail',
        component: lazy(()=>import('../pages/detail'))
    },
    {
        path:'/',
        component:()=><Redirect to='/home' />
    }
]