import './index.css'
import App from './App.jsx'
import React from "react";

import ReactDOM from "react-dom/client";


import {
  AuthProvider,
} from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <AuthProvider>
    <App />
  </AuthProvider>
);
