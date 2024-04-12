
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/Homepage.jsx";
import SearchResultsPage from "./Pages/SearchPage/SearchPage.jsx";
import GamePage from "./Pages/Gamepage/Gamepage.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import ComingSoon from "./Pages/ComingSoon/ComingSoon.jsx";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage.jsx";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/search' element={<SearchResultsPage/>}/>
              <Route path='/game/:id' element={<GamePage/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/comingsoon' element={<ComingSoon/>}/>
              <Route path='checkout-success' element={<CheckoutPage/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
