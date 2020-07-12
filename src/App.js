import React from "react";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Auth path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
