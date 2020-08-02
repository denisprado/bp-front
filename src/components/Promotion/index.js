import React, { useEffect } from "react";
import { Container } from "./styles";
import { useItems } from '../../hooks/items'
import { useYourPizza } from '../../hooks/yourPizza'

const Promotion = () => {
  const { items, getItems } = useItems();
  const { finished } = useYourPizza();

  useEffect(() => {
    getItems()
  }, [getItems])

  return (
    !finished &&
    <Container>
      <>
        <h2>Peça a pizza do dia e ganhe um Bônus!</h2>
        <p>Pizza do dia: </p>
        <ul>
          {
            items.filter(item => item.promotion && item)
              .map(item =>
                <li key={item.id}>
                  <strong>{item.title} </strong>
                </li>
              )
          }
        </ul>
      </>
    </Container >
  )
};

export default Promotion;
