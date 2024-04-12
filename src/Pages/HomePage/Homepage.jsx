import React, { useState, useEffect } from 'react';
import './Homepage.css';
import NewRelease from "../../Components/HomePage/NewRelease/NewRelease.jsx";
import TopGames from "../../Components/HomePage/TopGames/TopGames.jsx";
import EpicGamesHeader from "../../Components/Header/Header.jsx";
import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";
import GamesCarousel from "../../Components/HomePage/GamesCarousel/GamesCarousel.jsx";

function HomePage() {




    return (
        <div className='HomePage'>
            <EpicGamesHeader/>
            <EpicGamesSearchBar/>
            <GamesCarousel/>
            <NewRelease/>
            <TopGames/>
        </div>
    );

}

export default HomePage;
