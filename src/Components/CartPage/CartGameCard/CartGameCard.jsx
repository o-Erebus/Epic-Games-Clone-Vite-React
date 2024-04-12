import React, { useState, useEffect } from "react";
import './CartGameCard.css';
import {Link} from "react-router-dom";

const CartGameCard = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            setCartItems(parsedCart);
        }
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="CartCard">
            {cartItems.map((item, index) => (
                <div key={index} className='CartItemsContainer'>
                    <Link to={`/game/${item.id}`}>
                    <img src={item.background_image} alt={item.name}/>
                    </Link>
                    <div className='CartItemDetails'>
                        <h2>{item.name}</h2>
                        <h3>$60.00</h3>
                    </div>
                    <span onClick={() => removeFromCart(index)}>Remove</span>
                </div>
            ))}
        </div>
    );
}

export default CartGameCard;
