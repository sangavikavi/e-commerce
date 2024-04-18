import React from 'react';

const ShoppingCartItem = ({ item, index, removeFromCart }) => {
    const { name, price } = item;

    const handleRemoveFromCart = () => {
        removeFromCart(index);
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            <div>
                <p className="font-semibold">{name}</p>
                <p className="text-gray-600">${price}</p>
            </div>
            <button 
                className="text-red-500 hover:text-red-700"
                onClick={handleRemoveFromCart}
            >
                Remove
            </button>
        </div>
    );
}

export default ShoppingCartItem;
