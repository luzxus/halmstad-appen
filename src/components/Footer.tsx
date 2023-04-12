// src/components/Footer.tsx
import React from 'react'
import styled from 'styled-components'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`

const FooterLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`

const FooterNav = styled.ul`
  display: flex;
  list-style: none;
`

const FooterNavItem = styled.li`
  margin-left: 1.5rem;
`

const FooterNavLink = styled.a`
  font-size: 1rem;
  color: #fff;
  &:hover {
    color: #ccc;
  }
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-left: 0.5rem;
  color: #fff;
  transition: background-color 0.3s;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLogo href="#">The (Halmstad) Office</FooterLogo>
      <FooterNav>
        <FooterNavItem>
          <FooterNavLink href="#features">Sidor</FooterNavLink>
        </FooterNavItem>
      </FooterNav>
      <SocialIcons>
        <SocialIcon href="#">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="#">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#">
          <FaLinkedinIn />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  )
}

export default Footer
