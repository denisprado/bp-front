import React from 'react';
import { PagesProvider } from "./pages";
import { ItemsProvider } from "./items";
import { YourPizzaProvider } from "./yourPizza";

const AppProvider = ({ children }) => (
    <PagesProvider>
        <ItemsProvider>
            <YourPizzaProvider >{children}</YourPizzaProvider>
        </ItemsProvider>
    </PagesProvider>
);

export default AppProvider;

