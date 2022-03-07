import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import fetchImages from "../../utils/fetchImages";
import {
  // Link,
  // Outlet,
  useLocation,
  // useNavigate,
  // useParams,
} from "react-router-dom";
import styles from "./ImageDetailsPage.module.css";

const ImageDetailsPage = () => {
  const location = useLocation();
  const [imgData, setImgData] = useState(null);
  // const { imageId } = useParams();
  // const { image, setImage } = useState([]);
  // const URL = `https://api.unsplash.com/search/photos/${imageId}&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;

  useEffect(() => {
    setImgData(location.state.data);
    //   fetchImages(URL)
    //     .then((data) => {
    //       //  this.setState({ images: data.hits });
    //       // setImage(data.results);
    //       console.log("data:", data);
    //       console.log("data.results:", data.results);
    //       // setQuery("");
    //       // return data.results;
    //       // navigate("/results");
    //       // console.log("imageId", imageId);
    //     })
    //     .catch((err) => console.log("err", err))
    //     .finally(console.log("fetchImages"));
  }, [location.state.data]);

// const renderSwitch = (param) => {
//   switch(param){
//         case 1: return "January";
//         case 2: return "February";
//         case 3: return "March";
//         case 4: return "April";
//         case 5: return "May";
//         case 6: return "June"; 
//         case 7: return "July";
//         case 8: return "August";
//         case 9: return "September";
//         case 10: return "October";
//         case 11: return "November";
//         case 12: return "December";
//         }
// }

  return (
    <div>
      {imgData && (
        <div className={styles.overlay}>
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

export default ImageDetailsPage;
