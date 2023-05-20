import React, { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const { mealData, cart, setCart } = useContext(DataContext);
    const urlId = useLoaderData();
    // console.log(mealData)

    let currentMeal;
    if (mealData) {
        currentMeal = mealData.find(meal => meal.idMeal === urlId)
    }
    if (!mealData) {
        return <progress className="progress w-full"></progress>
    }
    // console.log(currentMeal)
    const { idMeal, strMeal, strMealThumb, strInstructions } = currentMeal;

    const handleAddToCart = () => {
        // console.log(cart)
        const exist = cart.find(meal => meal.idMeal === idMeal);
        const rest = cart.filter(meal => meal.idMeal !== idMeal);
        if (exist) {
            currentMeal["srtQuantity"] = currentMeal.srtQuantity + 1;
            setCart([...rest, currentMeal])
        }
        else {
            currentMeal["srtQuantity"] = 1;
            setCart([...cart, currentMeal])
        }
    }
    return (
        <div>
            {
                currentMeal &&
                <div className="">

                    <div className="  p-10 rounded shadow-lg">
                        <img className='rounded h-96 w-3/5 mx-auto' src={strMealThumb} alt="Album" />
                        <h2 className="card-title">{strMeal}</h2>
                        <p className=' my-2 text-gray-500'>{strInstructions.slice(0, 500)}</p>

                        <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default MealDetails;