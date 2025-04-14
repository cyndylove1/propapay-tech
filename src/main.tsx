import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Windmill } from "@windmill/react-ui";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/tanstackConfig';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Windmill >
            <App />
          </Windmill>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);

