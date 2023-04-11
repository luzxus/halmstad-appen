// src/components/Features.tsx
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineCar } from 'react-icons/ai'
const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 2rem;
`

const FeatureCard = styled(motion.div)`
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 2rem;
`

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const FeatureDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`

const featuresData = [
  {
    id: 1,
    icon: <AiOutlineCar />,
    title: 'Parkeringsbokaren',
    description:
      'Här kan du boka parkeringsplatserna som finns tillgängliga för kontoret',
    url: 'https://ffcg-halmstad.netlify.app/',
  },
   /* {
    id: 2,
    icon: '🔒',
    title: 'Feature 2',
    description: 'Suspendisse venenatis quam sed libero euismod feugiat.',
  }, */
  {
    id: 2,
    icon: '💡',
    title: 'Evenemang',
    description:
      'Kommer snart! Här kommer du kunna  läsa om kommande evenemang för kontoret. Såsom AW, Aktiviteter, Resor etc.',
    url: '/',
  },
]

const staggerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const featureAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Features: React.FC = () => {
  return (
    <FeaturesContainer id="features">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerAnimation}
      >
        {featuresData.map((feature) => (
          <a href={feature.url} key={feature.id}>
            <FeatureCard variants={featureAnimation}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          </a>
        ))}
      </motion.div>
    </FeaturesContainer>
  )
}

export default Features
