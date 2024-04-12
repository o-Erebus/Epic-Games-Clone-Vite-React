import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import './PaymentCard.css';

const PaymentCard = () => {
    const [price, setPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve cart data from localStorage
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const cartItems = JSON.parse(cartData);
            // Calculate price and subtotal based on the number of items in the cart
            const totalItems = cartItems.length;
            const pricePerItem = 60; // Assuming each item costs $60
            const priceAmount = totalItems * pricePerItem;
            const taxAmount = priceAmount * 0.18; // Assuming 18% tax
            const subtotalAmount = priceAmount + taxAmount;
            setPrice(priceAmount);
            setSubtotal(subtotalAmount);
        }
    }, []);

    const handleCheckout = () => {
        // Clear cart by removing cart data from localStorage
        const cartData = localStorage.getItem('cart');
        const cartItems = JSON.parse(cartData);
        const totalItems = cartItems.length;
        if(totalItems!==0) {
            localStorage.removeItem('cart');
            // Redirect to checkout success page
            navigate("/checkout-success");
        }
    };

    return (
        <div className="PaymentCard">
            <h2>Games and Apps Summary</h2>
            <div className="Payment-Items"><strong>Price: </strong>${price.toFixed(2)}</div>
            <div className="Payment-Items"><strong>Taxes (18%): </strong>${(price * 0.18).toFixed(2)}</div>
            <div className="Divider"/>
            <div className="Payment-Items"><strong>Subtotal: </strong>${subtotal.toFixed(2)}</div>
            <button className='Checkout-Button' onClick={handleCheckout}>CHECK OUT</button>
        </div>
    );
}

export default PaymentCard;
