
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
