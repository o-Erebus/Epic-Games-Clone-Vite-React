import React from 'react';
import './Header.css';
import {Link} from "react-router-dom"; // You can create this CSS file for styling

function EpicGamesHeader() {
    return (
        <header className="epic-header">
            <div className="logo">
                <Link to={'/'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1200px-Epic_Games_logo.svg.png" alt="Epic Games Logo" />
                </Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Store</a></li>
                    <li><a href="/comingsoon">Community</a></li>
                    <li><a href="/comingsoon">Support</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default EpicGamesHeader;
