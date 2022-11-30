import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root, { RequireAuth } from './components/Root';
import RootError from './components/Root/RootError';
import Iam from './routes/Iam';
import AppUtils from './utils/AppUtils';
const { lazyComp } = AppUtils;
const Home = lazyComp(() => import('./routes/home'));
const Login = lazyComp(() => import('./routes/Iam/Login'));

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />, 
    children: [
      {
        index: true, // 首页作为跟路由默认页面时开启
        id: 'home',
        element: <RequireAuth><Home /></RequireAuth>
      },
      // 账号相关
      {
        path: '/iam',
        element: <Iam />,
        children: [
          {
            path: '/iam/login',
            element: <Login />
          }
        ]
      }
    ]
  }
]);
