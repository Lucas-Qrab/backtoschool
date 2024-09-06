import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Logo href="/">
        <img src="logo.png" alt="logo" />
      </Logo>
      <NavLinks>
        <NavItem><NavLink href="/">About Uify</NavLink></NavItem>
        <NavItem><NavLink href="/">Features</NavLink></NavItem>
        <NavItem><NavLink href="/">Resources</NavLink></NavItem>
        <NavItem><NavLink href="/">Company</NavLink></NavItem>
      </NavLinks>
      <NavButtons>
        <ButtonDemo href="/">Get Demo</ButtonDemo>
        <ButtonSales href="/">Contact Sales</ButtonSales>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 10px 20px;
`;

const Logo = styled.a`
  img {
    width: 40px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 5px;

  &:hover {
    color: #00ff66;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonDemo = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #00ff66;

  &:hover {
    background-color: #00ff66;
    color: #000;
  }
`;

const ButtonSales = styled(ButtonDemo)`
  border: none;

  &:hover {
    background-color: #00ff66;
    color: #000;
  }
`;
