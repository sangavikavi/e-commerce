import React from 'react';
import productsData from '../productsData';

const ProductItem = ({ product, addToCart }) => {
    const { id, name, price, image } = product;

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="border p-4 rounded-md shadow-md">
            <img src={image} alt={name} className="w-full mb-2" />
            <div className="font-semibold">{name}</div>
            <div className="text-gray-600">${price}</div>
            <button 
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductItem;
