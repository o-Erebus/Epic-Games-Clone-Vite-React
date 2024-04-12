import React, {useEffect, useState} from "react";
import GameCard from "../GameCard/GameCard.jsx";

function TopGames (){
    const [games, setGames] = useState([]);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const newStoreddata = localStorage.getItem('topgamedata');

        if (newStoreddata) {
            setGames(JSON.parse(newStoreddata));
        } else {
            const gettenYearAgoDate = () => {
                const currentDate = new Date();
                const tenYearAgo = new Date(currentDate);
                tenYearAgo.setFullYear(currentDate.getFullYear() - 10);
                return tenYearAgo.toISOString().slice(0, 10);
            };

            const startDate = gettenYearAgoDate();
            const endDate = new Date().toISOString().slice(0, 10); // Current date

            fetchTopGames(API_KEY, {
                dates: `${startDate},${endDate}`,
                developers: 'guerrilla-games,santa-monica-studio,fromsoftware,rocksteady-studios,rockstar-games',
                metacritic:'80,100',
                ordering: "-metacritic",
            });
        }
    }, []);

    const fetchTopGames = (apiKey, params) => {
        const queryParams = new URLSearchParams(params).toString();
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&${queryParams}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('topgamedata', JSON.stringify(data.results));
                setGames(prevGames => [...prevGames, ...data.results]);
            })
            .catch(error => console.error('Error fetching data:', error));
    };


    return (
        <div className='Category-Header'>
            <h2>Top Games</h2>
            <div className="game-list">
                {games.slice(0, 8).map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
        </div>
    );

}


export default TopGames;