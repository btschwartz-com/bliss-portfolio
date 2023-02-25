import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-spinner">
          <BarLoader className="animation"  />
        </div>
      ) : (
        <>
          <h1>Welcome to my app!</h1>
          <p>This is the main content of the app.</p>
        </>
      )}
    </div>
  );
};

export default App;
