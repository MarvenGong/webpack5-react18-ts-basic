import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './app.less';
import './styles/common.less';
import router from './router';
const root = createRoot(document.getElementById('root') as Element);

root.render(<RouterProvider router={router} />);
