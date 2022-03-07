const fetchImages = (url) => {
  return fetch(url).then((dataJson) => {
    if (!dataJson.ok) {
      throw new Error("Error, !dataJson.ok", dataJson.status);
    }
    console.log("dataJson from fetchImages", dataJson);
    return dataJson.json();
  });
};

//calosc ma wygladac tak:
// const fetchImages = () => {
//   fetch(
//     "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k"
//     // "https://api.unsplash.com/"
//     // "https://unsplash.com/photos/6VhPY27jdps"
//     //  "https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo"
//   )
//     .then((dataJson) => {
//       if (!dataJson.ok) {
//         throw new Error("z ifa:", dataJson.status);
//       }
//       return dataJson.json();
//     })
//     .then((data) => {
//       //  this.setState({ images: data.hits });
//       // setImages(data);
//       console.log("data.results:", data.results);
//       return data.results;
//     })
//     .catch((err) => console.log("err", err))
//     .finally(console.log("fetchImages"));
// };

export default fetchImages;
