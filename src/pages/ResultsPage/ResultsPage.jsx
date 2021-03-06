import React from "react";
// import { useEffe-ct } from "react";
import { useContext } from "react";
import Cards from "../../components/cards/Cards";
import SearchBarResults from "../../components/searchbarresults/SearchBarResults";
import { ImagesContext, QueryContext } from "../../Helper/Context";
import styles from "./ResultsPage.module.css";



const ResultsPage = () => {
  const { images } = useContext(ImagesContext);
  const { query } = useContext(QueryContext);

// useEffect(() => {
//   console.log("query ResultsPage", query);
//   console.log("images", images);
//   console.log("");
// }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBarResults />
        <h3 className={styles.queryHeader}>
          {query.charAt(0).toUpperCase() + query.slice(1)}
        </h3>
        <div className={styles.results}>
          {/* {images.map((image) => (
            <img
              className={styles.img}
              width="100"
              height="100"
              key={image.id}
              src={image.urls.thumb}
              alt={image.alt_description}
            ></img>
          ))} */}
            {images.length > 0 && <Cards/>}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
