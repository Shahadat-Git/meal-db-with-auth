import React, { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';
import SingleMeal from './SingleMeal';

const Home = () => {
    const { mealData } = useContext(DataContext)
    return (
        <>
            {
                mealData ? <div className='grid grid-cols-3 gap-10'>
                    {mealData.map(meal => <SingleMeal
                        key={meal.idMeal}
                        meal={meal}
                    ></SingleMeal>)}
                </div>
                    :
                    <progress className="progress w-full"></progress>
            }
        </>
    );
};

export default Home;