import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import './GamesCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from "react-router-dom";

const GamesCarousel = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const newStoredData = localStorage.getItem('gamecarouseldata');

        if (newStoredData) {
            setGames(JSON.parse(newStoredData));
        } else {
            const getFifteenYearsAgo = () => {
                const currentDate = new Date();
                const tenYearsAgo = new Date(currentDate);
                tenYearsAgo.setFullYear(currentDate.getFullYear() - 15);
                return tenYearsAgo.toISOString().slice(0, 10);
            };

            const startDate = getFifteenYearsAgo();
            const endDate = new Date().toISOString().slice(0, 10); // Current date

            fetchTopGames(API_KEY, {
                dates: `${startDate},${endDate}`,
                developers: 'insomniac-games,nixxes-software,santa-monica-studio,fromsoftware,rocksteady-studios,rockstar-games,rockstar-north,Ubisoft',
                metacritic: '80,100',
                page: 1,
                page_size: 6,
            });
        }
    }, []);

    const fetchTopGames = (apiKey, params) => {
        const queryParams = new URLSearchParams(params).toString();
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&${queryParams}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('gamecarouseldata', JSON.stringify(data.results));
                setGames(data.results);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleNavigate = (index) => {
        const gameId = games[index].id;
        navigate(`/game/${gameId}`);
    };

    return (
        <div>
            <Carousel
                autoPlay={true}
                transitionTime={1000}
                className="games-carousel"
                dynamicHeight={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                onClickItem={handleNavigate}
            >
                {games.map((game, index) => (
                    <div key={game.id} style={{ position: 'relative' }}>
                        <img
                            src={game.background_image}
                            alt={`Screenshot ${index + 1}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleNavigate(index)}

                        />
                        <p className="games-carousel-label">
                            {game.name}
                        </p>
                    </div>

                ))}
            </Carousel>
        </div>
    );
};

export default GamesCarousel;
