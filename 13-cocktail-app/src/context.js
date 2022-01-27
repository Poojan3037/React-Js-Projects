import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const AppContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url2 = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";


const AppProvider = ({ children }) => {

    let [loading, setLoading] = useState(true);
    let [searchText, setSearchText] = useState('');
    let [data, setData] = useState([]);


    const loadData = async () => {
        let response = await fetch(`${url}${searchText}`);
        let jsonData = await response.json();

        const { drinks } = jsonData;

        let cocktail = undefined
        if (drinks) {
            cocktail = drinks.map((item) => {
                return {
                    id: item.idDrink,
                    name: item.strDrink,
                    img: item.strDrinkThumb,
                    type: item.strAlcoholic,
                    glass: item.strGlass,

                }
            })
        }

        if (cocktail) {
            setData(cocktail);
            setLoading(false);
        } else {
            setData([]);
        }





    }

    useEffect(() => {
        loadData();
    }, [searchText])

    useEffect(() => {
        loadData();
    }, [])



    return (
        <AppContext.Provider
            value={
                {
                    loading,
                    data,
                    searchText,
                    setSearchText,
                }
            }
        >
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, AppProvider };