import React from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../Helper/Context';
import styles from "./ImageDetails.module.css";


const ImageDetails = ({ imgData }) => {
  const { modal, setModal } = useContext(ModalContext);
  
 const handleClick = () => {
   setModal(!modal);
 };

  return (
    <div>
      {imgData && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            <p>{imgData.id}</p>
            <p>{imgData.created_at}</p>
            <p>{imgData.created_at.slice(0, 4)}</p>
            {/* <p>{renderSwitch(imgData.created_at.slice(5, 7))}</p> */}
            <p>{imgData.created_at.slice(5, 7)}</p>
            <p>{imgData.updated_at}</p>
            <p>{imgData.user.name}</p>
            <p>{imgData.user.location}</p>
            <img
              src={imgData.urls.regular}
              alt={imgData.alt_description}
              className={styles.img}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetails