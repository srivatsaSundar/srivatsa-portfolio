import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-[#030303] text-white min-h-screen selection:bg-white selection:text-black relative">
      <div className="noise"></div>
      <Suspense fallback={
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#030303] text-white">
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mb-4">
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="font-light tracking-[1.5em] text-[8px] uppercase opacity-40">Initializing Space</span>
        </div>
      }>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  )
}

export default App
