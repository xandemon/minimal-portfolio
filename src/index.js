import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//hiding navbar on scroll
const menubar = document.getElementById('menubar');
let prevScrollValue = window.scrollY;
window.addEventListener("scroll", () => {
  if (prevScrollValue < window.scrollY) {
    document.getElementById('menubar').classList.add('hideOnScroll');
  } else {
    document.getElementById('menubar').classList.remove('hideOnScroll');
  }
  prevScrollValue = window.scrollY;
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
