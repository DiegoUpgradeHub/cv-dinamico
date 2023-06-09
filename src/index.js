import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

//Components imports
import App from './App';
import Footer from "./core/Footer.jsx";
import Header from "./core/Header.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className="cv-dinamico">
      <Header />
      <App />
      <Footer />
    </div>
  </Router>
);
