import styled from "styled-components";
import { secondary } from '../../constants/theme';
import { shade } from 'polished'

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid ${shade(.3, secondary)};
  padding: 2.4rem;
  
  a{
    text-decoration:none;

  div{
    text-align: center;
    margin:0 auto;
    img{
      flex:1;
      max-width: 100px;
      align-items:center;
      
    }
    h1 {
      flex:1;
      font-size: 2.4rem;
      font-weight: 100;
      color: black;
      strong {
        font-weight: bold;
      }
    }
  }
  }
`;
