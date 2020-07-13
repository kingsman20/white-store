import React from "react";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { Router } from "@reach/router";
import {Provider} from 'react-redux';

import store from "./redux/store";

// Root component
function App() {
  return (
    // Using the provider component to make the sate available to the store
    <Provider store={store}>
      <div className="App">
        <Router>
          <Auth path="/" />
          <Dashboard path="dashboard" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
