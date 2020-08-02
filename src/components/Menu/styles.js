import styled from "styled-components";
import { shade, lighten } from "polished";
import { primary, secondary } from "../../constants/theme";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  max-width: 48%;
  margin-right: 2.4rem;
`;

export const Header = styled(Link)`
    text-decoration:none;
    
  h2
  {
    border: ${({ active }) => active === "true" ? `1px solid ${secondary}` : `1px solid ${shade(0.5, secondary)}`};
    color: ${({ active }) => active === "true" ? secondary : shade(0.5, secondary)};
    background-color: ${({ active }) => active === "true" ? primary : shade(0.05, secondary)};
    padding: 2rem;
    border-radius: 0.8rem;
    margin-top: 1.6rem;
    &:hover{
      background-color: ${({ active }) => active === "true" ? lighten(0.1, primary) : shade(0.1, secondary)};
    }
    }
`;

export const List = styled.div`
  
`

export const Item = styled.div`
  background-color: ${lighten(0.05, secondary)};
  transition: background-color 0.2s;
  margin-top: 0.8rem;
  &:hover {
    background-color: ${shade(0.005, secondary)};
    color: black;
    svg {
      color: ${primary};
      background: white;
      border-radius: 50%;
    }
  }
  border: 1px solid ${shade(0.25, secondary)};
  border-radius: 0.8rem;
  a {
    padding: 2.4rem;
    color: ${shade(0.5, secondary)};
    display: block;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      color: ${primary};
    }
    div {
      strong {
        font-size: 1.6rem;
      }

      p {
        margin-top: 0.4rem;
        font-size: 1.6rem;
      }
    }
    svg {
      margin-left: auto;
    }
  }
`;
