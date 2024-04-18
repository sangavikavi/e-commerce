import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../productsData';

const ProductCatalog = ({ addToCart }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {productsData.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductCatalog;
