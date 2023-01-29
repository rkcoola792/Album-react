import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Create from "./Componets/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Componets/Edit";
import Home from "./Componets/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
