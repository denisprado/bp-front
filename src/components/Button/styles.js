import { shade } from "polished";
import styled from "styled-components";
import { success } from "../../constants/theme";

export const Container = styled.button`
  background: ${success};
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  width: 100%;
  color: white;
  font-size: 1.6rem;
  font-weight: bolder;
  margin-top: 1.6rem;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${shade(0.2, success)};
  }
`;
