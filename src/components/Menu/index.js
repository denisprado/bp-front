import React, { useEffect, useCallback } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link, useRouteMatch } from 'react-router-dom';
import { success } from '../../constants/theme';
import { useItems } from '../../hooks/items';
import { usePages } from '../../hooks/pages';
import { useYourPizza } from '../../hooks/yourPizza';
import { Container, Header, Item, List } from "./styles";
import { Container as ContainerPromotion } from '../Promotion/styles'
import Button from '../../components/Button';
import history from '../../history';

const Menu = () => {
  const { pages, getPages } = usePages();
  const { items, getItems } = useItems();
  const { yourPizzaItems, addToYourPizza, finished, orderNewPizza, bonus } = useYourPizza();

  const { params } = useRouteMatch();


  useEffect(() => {
    getPages()
    getItems()
  }, [getItems, getPages])

  const getNewPizza = useCallback(() => {
    history.push('/');
    orderNewPizza()
  }, [orderNewPizza])

  return (
    <Container>
      {!finished ?
        pages && pages.map(page => (
          <div key={page.id}>
            <Header to={page.path} active={String(params.path === page.path)}>
              <h2>Escolha {page.title} </h2>
            </Header>
            <List>
              {params.path === page.path &&
                items.filter(item =>
                  item.page_id === page.id && item
                ).map(item =>
                  <Item key={item.id}>
                    <Link
                      to="#"
                      onClick={() => addToYourPizza(page.id, item)}>
                      <div>
                        <strong>{item.title}</strong>
                        <p>R${item.price},00</p>
                      </div>
                      {yourPizzaItems && yourPizzaItems.map(order => order.item_id === item.id && <FiCheckCircle key={item.id} size={24} color={success} />)}
                    </Link>
                  </Item>
                )
              }
            </List>
          </div>

        ))
        : <ContainerPromotion><h2>{bonus}</h2><Button onClick={getNewPizza}>Pedir nova pizza</Button></ContainerPromotion>}

    </Container >
  );
};

export default Menu;
