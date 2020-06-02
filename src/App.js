import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/main.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
