import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { ImagesContext, QueryContext, AutocompleteContext } from "./Helper/Context";
import HomePage from "./pages/HomePage/HomePage";
import ImageDetailsPage from "./pages/ImageDetailsPage/ImageDetailsPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  return (
    // <div className="App">
    <AutocompleteContext.Provider value={{ autocompleteSuggestions, setAutocompleteSuggestions }}>
      <ImagesContext.Provider value={{ images, setImages }}>
        <QueryContext.Provider value={{ query, setQuery }}>

          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/results">Results</NavLink>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route
              path="/results/:imageId"
              element={<ImageDetailsPage />}
            ></Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </QueryContext.Provider>
      </ImagesContext.Provider>
    </AutocompleteContext.Provider>
    //  </div>
  );
}

export default App;
