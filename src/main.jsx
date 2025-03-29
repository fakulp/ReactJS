/*----firedataBase-------*/
import { initializeApp } from "firebase/app";

/*----firedataBase-------*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyBSXOna6FA7JT9rlMJU2LpaRIs8lm-zeBo",
  authDomain: "reactjs-32da7.firebaseapp.com",
  projectId: "reactjs-32da7",
  storageBucket: "reactjs-32da7.firebasestorage.app",
  messagingSenderId: "178914287333",
  appId: "1:178914287333:web:362423c995f6a7de25be0c",
  measurementId: "G-Q5KZ0WNE1D"
};

initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)







