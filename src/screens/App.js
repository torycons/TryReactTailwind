import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import GridList from "../components/GridList";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto">
          <Nav />
          <Hero />
          <GridList />
          <Footer />
      </div>
    </div>
  );
}

export default App;
