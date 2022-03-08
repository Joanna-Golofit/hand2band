import React from "react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import {
  ImagesContext,
  ModalContext,
} from "../../Helper/Context";
import styles from "./Cards.module.css";
import ImageDetails from "../imagedetails/ImageDetails";
// import { useState } from "react";

const Cards = () => {
  const { images } = useContext(ImagesContext);
  // const { query } = useContext(QueryContext);
  const { modal, setModal } = useContext(ModalContext);

  const handleClick = (e, id) => {
    if (e.target.name === id) {
      console.log("id", id);
      console.log("e.target.name", e.target.name);
      setModal(!modal);
    }
    // image.id;
  };

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
        <div
          key={image.id}
          className={styles.cardContainer}
          onClick={(e) => handleClick(e, image.id)}
        >
          {/* <Link
            to={`${image.id}`}
            state={{
              from: `/results?query=${query}`,
              data: image,
            }}
          > */}
          {modal && <ImageDetails imgData={image} />}
          <img
            className={styles.img}
            name={image.id}
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
          {/* </Link> */}
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
