// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Updates from './components/Updates'
import Footer from './components/Footer'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  flex: 1;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evenemang" element={<Updates />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </AppContainer>
  )
}

export default App
