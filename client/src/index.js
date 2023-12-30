import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MyContextProvider } from "./MyContext";
import { VideoProvider } from './VideoContext';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
    <MyContextProvider>
    <App />
    </MyContextProvider>
    </VideoProvider>
  </React.StrictMode>
);
 