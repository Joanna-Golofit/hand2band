import React from "react";
import { useContext } from "react";
import { ImagesContext } from "../../Helper/Context";
import styles from "./Cards.module.css";

const Cards = () => {
  const { images, setImages } = useContext(ImagesContext);

  return (
    <div className={styles.results}>
      {images.map((image) => (
        <div key={image.id} className={styles.cardContainer}>
          <a href={image.urls.thumb}>
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
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
