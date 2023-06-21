import React from "react";
import { Home, ExerciseDetail } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";



const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
