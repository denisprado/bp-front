import { shade } from "polished";
import styled from "styled-components";
import { secondary } from "../../constants/theme";

export const Container = styled.div`
  padding: 2.4rem;
  background-color: white;
  border: 1px solid ${shade(0.25, secondary)};
  border-radius: 0.8rem;
  strong {
    display: block;
  }
  
  h2, p{
    font-size: 2.4rem;
    padding: .4rem 0;
  }

  ul {
    list-style: none;
    li {
      margin: .4rem 0;
      font-size: 2.4rem;
      padding:.2rem 0;
      display:flex;
      color: ${shade(0.35, secondary)};
      strong{
      flex:1;

      }
      span{
        margin-left:auto;
      }
    }
  }
`;
