// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { LeadModalProvider } from '@/context/LeadModalContext';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <LeadModalProvider>
//       <App />
//     </LeadModalProvider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LeadModalProvider } from '@/context/LeadModalContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LeadModalProvider>
        <App />
      </LeadModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);