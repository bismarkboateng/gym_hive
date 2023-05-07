import React from "react";
import { Navbar, Search, Exercise, Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Search />
        <Exercise />
        <Footer />
      </div>
    </div>
  )
}

export default App;
