import BannerItem from './componets/BannerItem';
import MenuItem from './componets/MenuItem';
import RodapeItem from './componets/RodapeItem';
import Cart from './componets/pages/Cart';
import Home from './componets/pages/Home';
import Login from './componets/pages/Login';
import Register from './componets/pages/Resgister';
import Product from './componets/pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './shared/PageNotFound';

function App() {
  return (
    <div className="App">
      <BannerItem />
      <MenuItem />
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/product" element={<Product/>} />
              <Route exact path="/cart" element={<Cart/>} />
              <Route  path="*" element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
      <RodapeItem />
    </div>
  );
}

export default App;
