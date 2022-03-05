import React from 'react'
import { useContext } from 'react';
import SearchBarResults from '../../components/searchbarresults/SearchBarResults';
import { ImagesContext, QueryContext } from '../../Helper/Context';

const ResultsPage = () => {

  const { images, setImages } = useContext(ImagesContext);
  const { query, setQuery } = useContext(QueryContext);


  return (
    <div>
      <SearchBarResults/>
      {images.map((image) => (
        <img
          width="100"
          height="100"
          key={image.id}
          src={image.urls.thumb}
          alt={image.alt_description}
        ></img>
      ))}
    </div>
  );
}

export default ResultsPage