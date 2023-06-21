import React,{ useState } from "react";
import { Home, ExerciseDetail } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./App.css";



const App = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("");

  const HomeObject = {
    exercises,
    setExercises,
    bodyPart,
    setBodyPart
  }

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home HomeObject={HomeObject} />} />
      <Route path="/exercise/:id" element={<ExerciseDetail exercises={exercises} /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
