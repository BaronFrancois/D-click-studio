import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Locations from './components/Locations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Locations />
      </main>
      <Contact />
    </div>
  );
}

export default App;