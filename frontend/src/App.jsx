import React from "react";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/" element={<Navigate to="/signup"/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
