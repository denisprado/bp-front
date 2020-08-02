import React, { createContext, useCallback, useState, useContext } from "react";
import api from '../services/api'

export const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {

    const [data, setData] = useState([])
    const getItems = useCallback(async (item) => {
        await api
            .get("/items")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <ItemsContext.Provider
            value={{ items: data, getItems }}
        >{children}</ItemsContext.Provider>
    )
}

export function useItems() {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('UseItems must be used with a ItemsProvider')
    }

    return context;
}

