import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ImagesContext,
  QueryContext,
  FetchedSuggestionsContext,
  FilteredSuggestionsContext,
} from "./Helper/Context";
import HomePage from "./pages/HomePage/HomePage";
import ImageDetailsPage from "./pages/ImageDetailsPage/ImageDetailsPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [fetchedSuggestions, setFetchedSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  return (
    // <div className="App">
    <FilteredSuggestionsContext.Provider
      value={{ filteredSuggestions, setFilteredSuggestions }}
    >
      <FetchedSuggestionsContext.Provider
        value={{ fetchedSuggestions, setFetchedSuggestions }}
      >
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
      </FetchedSuggestionsContext.Provider>
    </FilteredSuggestionsContext.Provider>
    //  </div>
  );
}

export default App;
