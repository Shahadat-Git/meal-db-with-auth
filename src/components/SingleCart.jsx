import React, { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';

const SingleCart = ({ meal }) => {
    const { cart, setCart } = useContext(DataContext)
    const { idMeal, strMeal, strMealThumb, srtQuantity } = meal;

    const handleItemRemove = (id) => {
        const rest = cart.filter(meal => meal.idMeal !== id);
        setCart([...rest]);
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-6">
            <figure className='p-5'><img className='h-52 w-56 rounded-lg' src={strMealThumb} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>Quantity : {srtQuantity}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleItemRemove(idMeal)} className="btn btn-error">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;