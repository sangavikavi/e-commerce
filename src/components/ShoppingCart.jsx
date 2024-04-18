import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            {cartItems.length === 0 ? (
                <p>Your shopping cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <ShoppingCartItem key={index} item={item} index={index} removeFromCart={removeFromCart} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ShoppingCart;
