import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;