import styles from "./Searchbar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.form}>
      <button type="submit" className={styles.button}>
        <span className={styles.label}></span>
        <svg width="30" height="30" viewBox="0 0 32 32">
          <path d="M 22 20 c 1.2 -1.6 2 -3.7 2 -6 c 0 -5.5 -4.5 -10 -10 -10 S 4 8.5 4 14 s 4.5 10 10 10 c 2.3 0 4.3 -0.7 6 -2 l 6.1 6 l 1.9 -2 l -6 -6 Z m -8 1.3 c -4 0 -7.3 -3.3 -7.3 -7.3 S 10 6.7 14 6.7 s 7.3 3.3 7.3 7.3 s -3.3 7.3 -7.3 7.3 Z"></path>
        </svg>
      </button>

      <input
        className={styles.input}
        type="text"
        autoComplete="on"
        autoFocus
        placeholder="Search free high-resolution photos"
      />
    </form>
  );
};

export default SearchBar;
