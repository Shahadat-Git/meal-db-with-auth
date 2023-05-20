import React, { createContext, useEffect, useState } from 'react';


export const DataContext = createContext(null);


const DataProvider = ({ children }) => {
    const [mealData, setMeaData] = useState(null);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeaData(data.meals))
            .catch(e => console.error(e))
    }, [])

    // console.log(mealData)

    const dataInfo = {
        mealData,
        cart,
        setCart,


    }
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider >
    );
};

export default DataProvider;