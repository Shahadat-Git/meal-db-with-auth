import React from 'react';
import { Link } from 'react-router-dom';

const SingleMeal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = meal;
    // console.log(meal)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions.slice(0, 50)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/meal/${idMeal}`} className="btn btn-primary">view details</Link>
                </div>
            </div>
        </div >
    );
};

export default SingleMeal;