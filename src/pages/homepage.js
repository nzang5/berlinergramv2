import React from 'react'
import Hero from '../components/auth/hero';
import Navbar from '../components/auth/navbar';
import About from '../components/auth/about';


function Homepage() {
  return (
    <main>
        <Navbar />
        <Hero />
        <About />
    </main>
  )
}

export default Homepage;