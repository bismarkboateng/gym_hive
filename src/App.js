import React from "react";
import { Home, ExerciseDetail } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";



const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail /> } />
    </Routes>
    </>
  )
}

export default App;
