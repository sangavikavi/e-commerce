import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';


function App() {
    // State for managing cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-4">E-Commerce App</h1>
            
            <div className="grid grid-cols-2 gap-8">
                {/* Product Catalog */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Product Catalog</h2>
                    <ProductCatalog addToCart={addToCart} />
                </div>

                {/* Shopping Cart */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                    <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
                </div>
            </div>
        </div>
    );
}

export default App;
