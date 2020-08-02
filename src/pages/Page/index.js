import React from "react";
import Menu from "../../components/Menu";
import Promotion from "../../components/Promotion";
import YourPizza from "../../components/YourPizza";
import { Container, Sidebar } from "./styles";

const Page = () => {
  return (
    <Container>
      <Menu />
      <Sidebar>
        <YourPizza />
        <Promotion />
      </Sidebar>
    </Container>
  );
};

export default Page;
