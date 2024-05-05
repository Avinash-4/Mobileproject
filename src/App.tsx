import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/button";
// import { Router, Route } from "express";
import button from "./components/button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@mui/base";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Your Hospital</h1>
        <MyButton label="Click me" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Router>
          <Routes>
            <Route element={<Button />}>
              <Route path="/components" element={<Button />} />
            </Route>
          </Routes>
        </Router> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
