import React, { createContext, useCallback, useState, useContext } from "react";
import api from '../services/api'

export const PagesContext = createContext(null);

export const PagesProvider = ({ children }) => {

  const [data, setData] = useState([])
  const getPages = useCallback(async () => {
    await api
      .get("/pages")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <PagesContext.Provider
      value={{ pages: data, getPages }}
    >{children}</PagesContext.Provider>
  )
}

export function usePages() {
  const context = useContext(PagesContext)

  if (!context) {
    throw new Error('UsePages must be used with a PagesProvider')
  }

  return context;
}

