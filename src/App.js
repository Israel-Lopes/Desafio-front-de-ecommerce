import Banner from './componets/Banner';
import Menu from './componets/Menu';
import Rodape from './componets/Rodape';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Resgister';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Banner />
      <Menu />
        <BrowserRouter>
          <Routes>
              <Route default path="/home" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/catalog" element={<Catalog/>} />
              <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      <Rodape />
    </div>
  );
}

export default App;
