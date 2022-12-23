import Banner from './componets/Banner';
import Menu from './componets/Menu';
import Rodape from './componets/Rodape';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Resgister';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Banner />
      <Menu />
        <BrowserRouter>
          <Routes>
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/product" element={<Product/>} />
              <Route exact path="/cart" element={<Cart/>} />
              <Route  path="*" element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
      <Rodape />
    </div>
  );
}

export default App;
