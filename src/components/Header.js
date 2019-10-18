import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  text-align: center;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <StyledLink  to='/'>Home</StyledLink>
        <StyledLink to='/characters'>Characters</StyledLink>
      </Nav>
    </header>
  );
}
