import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Windmill } from "@windmill/react-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Windmill >
        <App />
      </Windmill>
    </BrowserRouter>
  </StrictMode>,
);
