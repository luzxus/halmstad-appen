// src/components/Updates.tsx
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const UpdatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 2rem;
`

const UpdateCard = styled(motion.div)`
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 2rem;
`

const UpdateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const UpdateDate = styled.span`
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 1rem;
`

const UpdateContent = styled.p`
  font-size: 1rem;
`

const updatesData = [
  {
    id: 1,
    title: 'Aktivitet',
    date: '2023-06-05',
    content:
      'WWDC på kontoret. Börjar 19.00',
  },
  {
    id: 2,
    title: 'Forefront on tour',
    date: '2023-04-20',
    content: 'Konferens i Lindvallen börjar',
  },
  /*   {
    id: 3,
    title: 'Community Activity',
    date: '2023-0-05',
    content:
      'Get involved in our community activity to make a positive impact.',
  }, */
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

const updateAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Updates: React.FC = () => {
  return (
    <UpdatesContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerAnimation}
      >
        {updatesData.map((update) => (
          <UpdateCard key={update.id} variants={updateAnimation}>
            <UpdateTitle>{update.title}</UpdateTitle>
            <UpdateDate>
              {new Date(update.date).toLocaleDateString()}
            </UpdateDate>
            <UpdateContent>{update.content}</UpdateContent>
          </UpdateCard>
        ))}
      </motion.div>
    </UpdatesContainer>
  )
}

export default Updates
