import React from "react";
import { Navbar } from "./sections/navbar";
import HeroSection from "./sections/hero";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default App;
