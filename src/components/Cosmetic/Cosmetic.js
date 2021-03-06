import React from 'react';
import { addToDb, removeFromId } from '../../uttilities/local-storage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addCart = (Id) => {
        addToDb(id)
    };
    // work of delete button 
    const RemoveFromCart = id => {
        removeFromId(id);
    }
    const addToCart = () => addCart(id);
    return (
        <div className='product'>
            <h1>Id:{id}</h1>
            <h2>Buy this:{name}</h2>
            <p>Price:{price}</p>
            <button onClick={addToCart}>add to cart</button>
            <button onClick={() => addCart(id)}>add to cart with short cut</button>
            <button onClick={() => RemoveFromCart(id)}>delete</button>
        </div>
    );
};

export default Cosmetic;