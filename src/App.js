import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <NavLink to="/">Home</NavLink> {" "}
      <NavLink to="/results">Results</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
