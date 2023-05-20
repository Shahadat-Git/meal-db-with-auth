import React, { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';
import SingleCart from './SingleCart';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {
    const { cart, setCart } = useContext(DataContext);
    const navigate = useNavigate();

    const handleCancelOrder = () => {
        setCart([]);
    }
    const handleConfirmOrder = () => {
        navigate('/ordercomplete')
        setCart([])
    }
    return (
        <div className='mx-24'>
            {
                cart.length > 0 ? <>
                    <h3 className='text-center text-2xl border-2 py-5 rounded-2xl font-bold text-gray-500'>Cart</h3>
                    <div className='mt-10'>
                        {
                            cart.map(meal => <SingleCart
                                key={meal.idMeal}
                                meal={meal}
                            ></SingleCart>)
                        }
                    </div>
                    <div className='flex justify-end gap-5'>
                        <button onClick={handleCancelOrder} className='btn btn-error'>Cancel Order</button>
                        <button onClick={handleConfirmOrder} className='btn btn-success'>Confirm Order</button>
                    </div></>
                    :
                    <h3 className='text-center text-2xl border-2 py-5 rounded-2xl font-bold text-gray-500'>You didn't add any meal in cart</h3>
            }
        </div>
    );
};

export default ViewCart;