import React, {useEffect, useState} from "react";
import GameCard from "../GameCard/GameCard.jsx";

function NewRelease (){
    const [games, setGames] = useState([]);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const storedData = localStorage.getItem('newreleasedata');

        const getThreeMonthsAgoDate = () => {
            const currentDate = new Date();
            const threeMonthsAgo = new Date(currentDate);
            threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
            return threeMonthsAgo.toISOString().slice(0, 10);
        };

        if (storedData) {
            setGames(JSON.parse(storedData));
        } else {
            const threeMonthsAgoDate = getThreeMonthsAgoDate();
            const endDate = new Date().toISOString().slice(0, 10); // Current date
            fetchNewReleaseGames(API_KEY, {
                dates: `${threeMonthsAgoDate},${endDate}`,
            });
        }
    }, []);

    const fetchNewReleaseGames = (apiKey, params) => {
        const queryParams = new URLSearchParams(params).toString();
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&${queryParams}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('newreleasedata', JSON.stringify(data.results));
                setGames(prevGames => [...prevGames, ...data.results]);
            })
            .catch(error => console.error('Error fetching data:', error));
    };


    return (
        <div className='Category-Header'>
            <h2>New Release</h2>
            <div className="game-list">
                {games.slice(0, 8).map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
        </div>
    );

}


export default NewRelease;