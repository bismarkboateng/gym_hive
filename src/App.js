import React from "react";
import { Home, ExerciseDetail } from "./pages";
import { Routes, Route } from "react-router-dom";




const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail /> } />
    </Routes>
  )
}

export default App;
