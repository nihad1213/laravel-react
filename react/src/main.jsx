import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ContextProvider } from './contexts/ContextProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
