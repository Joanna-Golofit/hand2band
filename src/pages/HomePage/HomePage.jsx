import React from "react";
import SearchBar from "../../components/searchbar/Searchbar";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* HomePage */}
        <h1 className={styles.title}>Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <SearchBar />
        <p className={styles.paragraph}>
          <span className={styles.span}>Trending: </span>flower, wallpaper,
          background, happy, love
        </p>
      </div>
    </div>
  );
};

export default HomePage;
