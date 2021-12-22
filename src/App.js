import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/Login";
import Music from "./pages/Music";

function App() {
  return (
    <Routes>
    <Route exact path='/' element={<LandingPage />}  />
    <Route exact path='/login' element={<Login />}  />
    <Route exact path='/music' element={<Music />}  />
    </Routes>
  );
}

export default App;
