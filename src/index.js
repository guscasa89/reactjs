import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
//import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Initial from './pages/Initial';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyCKtFElWlHun_XEMrklMH_34x1MRh4CgZc",
  authDomain: "prueba-f4225.firebaseapp.com",
  projectId: "prueba-f4225",
  storageBucket: "prueba-f4225.appspot.com",
  messagingSenderId: "677962491556",
  appId: "1:677962491556:web:53509e97272435a20be831",
  measurementId: "G-HH7F79TW8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <Initial />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
