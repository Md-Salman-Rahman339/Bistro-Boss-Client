import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AuthProvider>

<QueryClientProvider client={queryClient}>


  <div className='max-w-6xl mx-auto'>
       <RouterProvider router={router} />
     </div>

</QueryClientProvider>
</AuthProvider>
</React.StrictMode>,
)
