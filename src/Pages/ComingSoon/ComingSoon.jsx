import './ComingSoon.css'
import EpicGamesHeader from "../../Components/Header/Header.jsx";
import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";

const comingSoon = () =>{
    return(
        <div >
            <EpicGamesHeader/>
            <EpicGamesSearchBar/>
            <div className="coming-soon">Coming Soon</div>
        </div>
    );
}

export default comingSoon;