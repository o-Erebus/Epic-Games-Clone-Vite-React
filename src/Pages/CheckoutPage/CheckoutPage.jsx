import EpicGamesHeader from "../../Components/Header/Header.jsx";
import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";
import './CheckoutPage.css'

const CheckoutPage = () => {
    return(
        <div>
            <EpicGamesHeader/>
            <EpicGamesSearchBar/>
            <div className="checkout">Payment Successful</div>
        </div>
    );
}

export default CheckoutPage;