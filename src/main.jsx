import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
<React.StrictMode>
<HelmetProvider>
  <div className='max-w-6xl mx-auto'>
       <RouterProvider router={router} />
     </div>
  </HelmetProvider>
</React.StrictMode>,
)
