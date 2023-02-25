import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Dogs from "../pages/dogs/Dogs";
import Navbar from "../header/Header";
import DogDisplay from "../pages/dogdisplay/DogDisplay";



const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:id" element={<DogDisplay />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
