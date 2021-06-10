import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto">
          <Nav />
          <Hero />
          <div className="mt-8 mb-8">
            <h1 className="text-center text-3xl">Lorem ipsum.</h1>
            <p className="text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex justify-around space-x-10 mt-4">
              <div className="bg-yellow-200	w-1/3 h-40"></div>
              <div className="bg-yellow-200	w-1/3 h-40"></div>
              <div className="bg-yellow-200	w-1/3 h-40"></div>
            </div>
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
