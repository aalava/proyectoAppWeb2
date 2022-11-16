import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Carrusel from './pages/Carrusel';

function App() {
  return (
    <div className="app">
      <Carrusel/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;