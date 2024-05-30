import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
//import './assets/styles/main.scss';
//import authService from './services/auth.service';



const Index = () => {
  //authService.useUserAuth();

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

async function startApp() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>,
  )
}

if (import.meta.env.VITE_WITH_SERVER) {
  console.log('Running with api server');
  //authService.refreshToken().finally(startApp);
} else {
  console.log('No api server');
  startApp();
}