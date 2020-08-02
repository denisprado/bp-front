import { shade } from "polished";
import styled from "styled-components";
import { secondary, success } from "../../constants/theme";

export const Container = styled.div`
  padding: 2.4rem;
  background-color: white;
  border-radius: 1rem;
  border: 2px dashed ${shade(0.45, secondary)};
  border-radius: 0.8rem;
  margin-top: 1.6rem;
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
      padding:.4rem 0;
      display:flex;
      color: ${success};
      strong{
      flex:1;

      }
      span{
        margin-left:auto;
      }
    }
  }
`;
