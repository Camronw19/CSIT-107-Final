import React from 'react'
import {Navbar, Home, About, Skills, Work} from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App