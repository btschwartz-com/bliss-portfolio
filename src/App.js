import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Navbar from "./components/Navbar";
import DogDisplay from "./pages/DogDisplay";



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
