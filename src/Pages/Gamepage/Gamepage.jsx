import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Gamepage.css';
import ScreenshotCarousel from "../../Components/GamePage/ScreenshotCarousel/ScreenshotCarousel.jsx";
import EpicGamesHeader from "../../Components/Header/Header.jsx";
import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";
import TitleBar from "../../Components/GamePage/TitleBar/TitleBar.jsx";
import BuyingGameCard from "../../Components/GamePage/BuyingGameCard/BuyingGameCard.jsx";

const GamePage = () => {
    const { id } = useParams();
    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [game, setGame] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGameDetails = async () => {
            setLoading(true);
            const API_KEY = import.meta.env.VITE_API_KEY;
            try {
                const cachedGameDetails = localStorage.getItem(`game_${id}`);
                if (cachedGameDetails) {
                    setGame(JSON.parse(cachedGameDetails));
                } else {
                    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch game details');
                    }
                    const data = await response.json();
                    setGame(data);
                    localStorage.setItem(`game_${id}`, JSON.stringify(data));
                }
            } catch (error) {
                console.error('Error fetching game details:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchScreenshots = async () => {
            setLoading(true);
            const API_KEY = import.meta.env.VITE_API_KEY;
            try {
                const cachedScreenshots = localStorage.getItem(`screenshots_${id}`);
                if (cachedScreenshots) {
                    setScreenshots(JSON.parse(cachedScreenshots));
                    setLoading(false);
                } else {
                    const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch screenshots');
                    }
                    const data = await response.json();
                    setScreenshots(data.results);
                    setLoading(false);
                    localStorage.setItem(`screenshots_${id}`, JSON.stringify(data.results));
                }
            } catch (error) {
                console.error('Error fetching screenshots:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGameDetails();
        fetchScreenshots();
    }, [id]);

    const addToCart = () => {
        if (game) {
            setCartItems([...cartItems, game]);
            setAddedToCart(true);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='GamePage'>
            <EpicGamesHeader />
            <EpicGamesSearchBar />

            {game && (
                <>
                    <TitleBar name={game.name} rating={game.rating} />
                    <div className='Content'>
                        <div className='TopContent'>
                            {screenshots && <ScreenshotCarousel screenshots={screenshots} />}
                            <BuyingGameCard game={game} addToCart={addToCart} />
                        </div>
                        <div className="game-details">
                            <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default GamePage;
