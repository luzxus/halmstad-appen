// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/path/to/your/background-image.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroCTA = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent initial="hidden" animate="visible" variants={heroVariants}>
        <HeroTitle>Halmstad kontoret</HeroTitle>
        <HeroSubtitle>Bästa kontoret behöver bästa lösningarna</HeroSubtitle>
        <HeroCTA href="#features">Lösningar</HeroCTA>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
