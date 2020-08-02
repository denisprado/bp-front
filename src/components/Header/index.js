import React from "react";
import { Link } from 'react-router-dom'
import { Container } from "./styles";
import logo from '../../assets/logo.png'

const Header = () => (
  <Container>
    <Link to={'/'}>
      <div>

        <img src={logo} width={50} alt={"brain Pizza Logo"} />
        <h1>
          Brain <strong>Pizza</strong>
        </h1>
      </div>
    </Link >
  </Container >
);

export default Header;
