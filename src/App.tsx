// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Updates from './components/Updates'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evenemang" element={<Updates />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
