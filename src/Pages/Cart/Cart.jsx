import EpicGamesHeader from "../../Components/Header/Header.jsx";
import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";
import CartGameCard from "../../Components/CartPage/CartGameCard/CartGameCard.jsx";
import './Cart.css'
import PaymentCard from "../../Components/CartPage/PaymentCard/PaymentCard.jsx";

const Cart = () =>{
    return(
        <div className='CartPage'>
            <EpicGamesHeader/>
            <EpicGamesSearchBar/>
            <div className='Title'>
                <h1>My Cart</h1>
            </div>

            <div className='CartContent'>
                <CartGameCard/>
                <PaymentCard/>
            </div>

        </div>
    );
}

export default Cart;