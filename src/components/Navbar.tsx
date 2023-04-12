// src/components/Navbar.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`

const NavItem = styled.li`
  margin-left: 1.5rem;
`

const NavLink = styled.a`
  font-size: 1rem;
  color: #333;
  &:hover {
    color: #666;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileNavMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  @media (max-width: 768px) {
    display: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'block' : 'none'};
  }
`

const MobileNavItem = styled.li`
  padding: 0.5rem 2rem;
  &:hover {
    background-color: #f5f5f5;
  }
`

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavbarContainer>
        <Logo href="/">Halmstad</Logo>
        <NavMenu>
          <NavItem>
            <NavLink href="#features">Sidor</NavLink>
          </NavItem>
         {/*  <NavItem>
            <NavLink href="#features">Vi som jobbar här</NavLink>
          </NavItem> */}
        </NavMenu>
        <MobileMenuIcon onClick={toggleMenu}>
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </MobileMenuIcon>
      </NavbarContainer>
      <MobileNavMenu isOpen={isOpen}>
        <MobileNavItem>
          <NavLink href="#features" onClick={toggleMenu}>
            Sidor
          </NavLink>
        </MobileNavItem>
      </MobileNavMenu>
    </>
  )
}

export default Navbar
