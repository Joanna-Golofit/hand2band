import React from "react";
import SearchBar from "../../components/searchbar/Searchbar";
import styles from "./HomePage.module.css"

const HomePage = () => {

  return (
    <>
      <div className={styles.container}>
        HomePage
        <h1>Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <SearchBar />
        <p>
          <span>Trending: </span>flower, wallpaper, background, happy, love
        </p>
      </div>
    </>
  );
};

export default HomePage;
