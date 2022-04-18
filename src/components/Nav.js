import React from "react";
import styled from "styled-components";


const NavContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;

`;

const Ul = styled.ul`
display:flex;
 justify-content:center;
 align-items:center;
`
const Li = styled.li`
border: 1px solid black;
list-style:none;
 margin-right:80%;

`
const Nav = () => {
  return (
    <NavContainer>
      <Ul>
          <Li>home </Li>
          <Li>projects</Li>
          <Li>About</Li>
      </Ul>
    </NavContainer>
  );
};

export default Nav;
