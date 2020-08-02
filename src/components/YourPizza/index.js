import React from "react";
import { Container } from "./styles";
import { useYourPizza } from '../../hooks/yourPizza';
import { useItems } from '../../hooks/items';
import { usePages } from '../../hooks/pages';
import Button from '../Button'

const YourPizza = () => {
  const { items } = useItems();
  const { pages } = usePages();
  const { yourPizzaItems, orderYourPizza, finished } = useYourPizza();

  return (
    <Container>
      <h2>Vamos montar a sua pizza?</h2>
      {yourPizzaItems.length > 0 && <p>O que você pediu até agora:</p>}
      <ul>
        {
          yourPizzaItems && yourPizzaItems
            .map(item => item.item_id)
            .map(itemOrder => items
              .map(item =>
                item.id === itemOrder &&
                <li key={item.id}>
                  <strong>{item.title}</strong><span>R${item.price},00</span>
                </li>)
            )
        }
      </ul>
      {yourPizzaItems.length === pages.length && !finished && <Button onClick={orderYourPizza}>Tudo certo, peça sua Pizza!</Button>}

    </Container>
  );
}

export default YourPizza;
