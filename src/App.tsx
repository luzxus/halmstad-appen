import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { GlobalStyle } from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default App
