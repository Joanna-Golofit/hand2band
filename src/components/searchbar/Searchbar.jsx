import fetchImages from "../../utils/fetchImages";
import styles from "./Searchbar.module.css";
import {
  FetchedSuggestionsContext,
  ImagesContext,
  QueryContext,
  FilteredSuggestionsContext,
} from "../../Helper/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const navigate = useNavigate();

  const { setImages } = useContext(ImagesContext);
  const { filteredSuggestions, setFilteredSuggestions } = useContext(
    FilteredSuggestionsContext
  );
  const { fetchedSuggestions, setFetchedSuggestions } = useContext(
  FetchedSuggestionsContext
  );
  const { query, setQuery } = useContext(QueryContext);
  const URL = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;

  useEffect(() => {
    fetchImages(
      "https://api.unsplash.com/search/photos?query=o&per_page=30&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k"
    )
      .then((data) => {
        //  this.setState({ images: data.hits });
        // setImages(data.results);
        // console.log("data:", data);
        console.log("useEffect fetchImages data.results:", data.results);
        // console.log(
        //   "data.results.tags:",
        //   data.results.flatMap((result) =>
        //     result.tags.flatMap((tag) => tag.title)
        //   )
        // );
        let array = data.results.flatMap((result) =>
          result.tags.flatMap((tag) => tag.title)
        );

        // let array = data.results.map((result) => result.alt_description);
        // console.log(' data.results.map((result) => result.alt_description)', data.results.map((result) => result.alt_description));
        let uniqueArray = [...new Set(array)];
        return uniqueArray;
        // setQuery("");
        // return data.results;
        // navigate("/results");
      })
      .then((uniqueArray) => setFetchedSuggestions(uniqueArray))
      .catch((err) => console.log("err", err))
      .finally(console.log("fetchImages SearchBar useEffect"));
  }, [setFetchedSuggestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages(URL)
      .then((data) => {
        //  this.setState({ images: data.hits });
        setImages(data.results);
        console.log("data.results:", data.results);
        // setQuery("");
        // return data.results;
        navigate("/results");
      })
      .catch((err) => console.log("err", err))
      .finally(console.log("fetchImages SearchBar"));
  };
  const handleChange = (e) => {
    const inputQuery = e.target.value;
    let matches = [];
    // if (inputQuery.length >= 3) {
    if (inputQuery) {

//  fetchImages(URL)
//    .then((data) => {    
//      console.log("useEffect fetchImages data.results:", data.results);     
//      let array = data.results.flatMap((result) =>
//        result.tags.flatMap((tag) => tag.title)
//      );
//      let uniqueArray = [...new Set(array)];
//      return uniqueArray;
//      // setQuery("");
//      // return data.results;
//      // navigate("/results");
//    })
//    .then((uniqueArray) => setFetchedSuggestions(uniqueArray))
//    .catch((err) => console.log("err", err));


      // tu wiekszy niz 3?
      matches = fetchedSuggestions.filter((word) => {
        const regex = new RegExp(`${inputQuery}`, "gi");
        // console.log(new RegExp(`${inputQuery}`, "gi"));
        // console.log(word.match(regex));
        return word.match(regex);
      });
        setQuery(inputQuery);
    } else {
      setQuery("");
    }
    console.log("matches", matches);
    setFilteredSuggestions(matches);
  };

  const handleOnClick = (word) => {
    setQuery(word);
    setFilteredSuggestions([]);
    fetchImages(URL)
      .then((data) => {
        //  this.setState({ images: data.hits });
        setImages(data.results);
        console.log("data.results:", data.results);
        // setQuery("");
        // return data.results;
        navigate("/results");
      })
      .catch((err) => console.log("err", err));
    navigate("/results");
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}></span>
          <svg width="18" height="18" viewBox="0 0 30 30">
            <path d="M 22 20 c 1.2 -1.6 2 -3.7 2 -6 c 0 -5.5 -4.5 -10 -10 -10 S 4 8.5 4 14 s 4.5 10 10 10 c 2.3 0 4.3 -0.7 6 -2 l 6.1 6 l 1.9 -2 l -6 -6 Z m -8 1.3 c -4 0 -7.3 -3.3 -7.3 -7.3 S 10 6.7 14 6.7 s 7.3 3.3 7.3 7.3 s -3.3 7.3 -7.3 7.3 Z"></path>
          </svg>
        </button>

        <input
          onChange={handleChange}
          className={styles.input}
          type="text"
          value={query}
          autoComplete="on"
          autoFocus
          placeholder="Search free high-resolution photos"
        />
      </form>
      {filteredSuggestions && filteredSuggestions.length <= 10 && (
        <div className={styles.suggestionsWrapper}>
          {filteredSuggestions.map((suggestion, i) => (
            <p
              key={ i}
              onClick={() => handleOnClick(suggestion)}
              className={styles.suggestion}
            >
              {suggestion}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
