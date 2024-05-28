import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import { ProviderContextApi } from './components/store/ContextApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContextApi>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderContextApi>
  </React.StrictMode>,
)
