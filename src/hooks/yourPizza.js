import _ from 'lodash';
import React, { createContext, useCallback, useContext, useState } from "react";
import api from '../services/api';

export const YourPizzaContext = createContext(null);

export const YourPizzaProvider = ({ children }) => {

  // states
  const [tempData, setTempData] = useState([]);
  const [bonus, setBonus] = useState('Peça a pizza do dia e ganhe um Bônus!');
  const [finished, setFinished] = useState(false)
  // methods

  const orderYourPizza = useCallback(async () => {
    await api
      .get("/items?promotion=true")
      .then((response) => {
        api.get(`/promo/${_.isEqual(
          response.data.map(item => item.id),
          tempData.map(item => item.item_id)) ? 1 : 2}`).then(resp => setBonus(`${resp.data.title} Valor do Bônus: R$${resp.data.value},00`))
      }
      );
    setFinished(true);
  }, [tempData]);

  const addToYourPizza = useCallback((page, item) => {
    let items = tempData;
    let changeItem = { ...tempData[page - 1], id: page, item_id: item.id, price: item.price }
    items[page - 1] = changeItem;

    setTempData(items);

  }, [tempData]);

  const orderNewPizza = useCallback(() => {
    setTempData([]);
    setBonus("Peça a pizza do dia e ganhe um Bônus!");
    setFinished(false);
  }, [])

  return (
    <YourPizzaContext.Provider
      value={{ yourPizzaItems: tempData, addToYourPizza, finished, orderYourPizza, orderNewPizza, bonus }}
    >{children}</YourPizzaContext.Provider>
  )
}

// hook

export function useYourPizza() {
  const context = useContext(YourPizzaContext)

  if (!context) {
    throw new Error('UseYourPizza must be used with a YourPizzaProvider')
  }

  return context;
}

