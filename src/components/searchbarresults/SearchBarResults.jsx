import React from "react";
import { useContext } from "react";
import { ImagesContext, QueryContext } from "../../Helper/Context";
import fetchImages from "../../utils/fetchImages";
import styles from "./SearchBarResults.module.css";


const SearchBarResults = () => {
  const { query, setQuery } = useContext(QueryContext);
  const { images, setImages } = useContext(ImagesContext);
  const URL = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;


  const handleChange = (e) => {
    const inputQuery = e.target.value;
    if (inputQuery) {
      setQuery(inputQuery);
    } else {
      setQuery("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages(URL)
      .then((data) => {
        //  this.setState({ images: data.hits });
        setImages(data.results);
        console.log("data.results:", data.results);
        // setQuery("");
        // return data.results;
        // navigate("/results");
      })
      .catch((err) => console.log("err", err))
      .finally(console.log("fetchImages"));
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
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
  );
};

export default SearchBarResults;
