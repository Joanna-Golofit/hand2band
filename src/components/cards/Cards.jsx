import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ImagesContext, QueryContext } from "../../Helper/Context";
import styles from "./Cards.module.css";

const Cards = () => {
  const { images, setImages } = useContext(ImagesContext);
  const { query, setQuery } = useContext(QueryContext);

  return (
    // <div className={styles.results}>
    //   {images.map((image) => (
    //     <div key={image.id} className={styles.cardContainer}>
    //       <a href={image.urls.thumb}>
    //         <img
    //           className={styles.img}
    //           // width="200"
    //           // height="200"
    //           src={image.urls.thumb}
    //           alt={image.alt_description}
    //         ></img>
    //         <div className={styles.tags}>
    //           {image.tags.map((tag) => (
    //             <div className={styles.tag}>{tag.title}</div>
    //           ))}
    //         </div>
    //       </a>
    //     </div>
    //   ))}
    // </div>
    <div className={styles.results}>
      {images.map((image) => (
        <div key={image.id} className={styles.cardContainer}>
          <Link
            to={`${image.id}`}
            state={{
              from: `/results?query=${query}`,
              data: image,
            }}
          >
            <img
              className={styles.img}
              // width="200"
              // height="200"
              src={image.urls.thumb}
              alt={image.alt_description}
            ></img>
            <div className={styles.tags}>
              {image.tags.map((tag) => (
                <div className={styles.tag}>{tag.title}</div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;

//  <Link
//    to={`${movie.id}`}
//    state={{
//      from: `/movies?title=${searchTerm}`,
//    }}
//  >
//    {movie.original_title}
//  </Link>;