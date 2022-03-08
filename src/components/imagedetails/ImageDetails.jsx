import React from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../Helper/Context';
import styles from "./ImageDetails.module.css";


const ImageDetails = ({ imgData }) => {
  const { modal, setModal } = useContext(ModalContext);

  const renderSwitch = (param) => {
    switch (param) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "oops";
    }
  }

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div>
      {imgData && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            <h4>Author: {imgData.user.name}</h4>
            {/* <p>{imgData.id}</p> */}
            {/* <p>Created at: {imgData.created_at}</p> */}
            <p>
              Created at: {renderSwitch(imgData.created_at.slice(5, 7))}{" "}
              {imgData.created_at.slice(0, 4)}
            </p>
            {/* <p>Added at: {imgData.updated_at}</p> */}
            <p>
              Added at: {renderSwitch(imgData.updated_at.slice(5, 7))}{" "}
              {imgData.updated_at.slice(0, 4)}
            </p>
            <p>Location: {imgData.user.location}</p>
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