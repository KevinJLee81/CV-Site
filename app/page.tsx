"use client"

import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

export default function Home() {
  return (
    <div className='font-mono'>
      <Navigation />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
