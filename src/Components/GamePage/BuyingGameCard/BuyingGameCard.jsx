import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BuyingGameCard.css';

const BuyingGameCard = ({ game }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load cart data from local storage when component mounts
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = () => {
        // Check if the game is already in the cart
        const isDuplicate = cart.some(item => item.id === game.id);

        if (!isDuplicate) {
            // If not a duplicate, add it to the cart
            const updatedCart = [...cart, game];
            setCart(updatedCart);
            // Save updated cart data to local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const isInCart = cart.some(item => item.id === game.id);

    return (
        <div className="BuyingCard">
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <h4>$60.00</h4>
            <button className='BuyNow'>BUY NOW</button>
            <button className='AddtoCart' onClick={addToCart}>
                {isInCart ? 'IN CART' : 'ADD TO CART'}
            </button>
            <div className="GameInfo">

                <div className="GameInfo-Items"><strong>Developers</strong> {game.developers[0].name}</div>
                <div className="Divider"/>
                <div className="GameInfo-Items"><strong>Publishers</strong> {game.publishers[0].name}</div>
                <div className="Divider"/>
                <div className="GameInfo-Items"><strong>Release Date</strong> {game.released}</div>
                <div className="Divider"/>
            </div>
        </div>
    );
}

export default BuyingGameCard;
