import fetchImages from "../../utils/fetchImages";
import styles from "./Searchbar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("coffee");
  const URL = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages(URL)
      .then((data) => {
        //  this.setState({ images: data.hits });
        setImages(data.results);
        console.log("data.results:", data.results);
        // return data.results;
      })
      .catch((err) => console.log("err", err))
      .finally(console.log("fetchImages"));
  };
  const handleChange = (e) => {
    const inputQuery = e.target.value;
    if (inputQuery) {
      setQuery(inputQuery);
    } else {
      setQuery("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button type="submit" className={styles.button}>
        <span className={styles.label}></span>
        <svg width="30" height="30" viewBox="0 0 32 32">
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

export default SearchBar;