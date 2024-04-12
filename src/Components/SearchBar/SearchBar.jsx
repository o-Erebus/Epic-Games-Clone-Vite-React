import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import useHistory from React Router
import './SearchBar.css';

function EpicGamesSearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Access the history object for navigation

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Navigate to the search results page with the search term as a query parameter
        navigate(`/search?query=${searchTerm}`);
    };

    const handleCart = ()=>{
        navigate('/cart');
    }

    return (
        <div className='SearchBar'>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search games..."
                    className="search-input"
                />
            </form>
            <div className='CartButton' onClick={handleCart}>
                    Cart
            </div>

        </div>
    );
}

export default EpicGamesSearchBar;
