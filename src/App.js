import { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchbar/Searchbar";

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    fetch(
      "https://api.unsplash.com/"
      //  "https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo"
    )
      .then((dataJson) => {
        if (!dataJson.ok) {
          throw new Error("z ifa:", dataJson.status);
        }
        return dataJson.json();
      })
      .then((data) => {
        //  this.setState({ images: data.hits });
        // setImages(data);
        console.log("data:", data);
        console.log("data.hits:", data.hits);
      })
      .catch((err) => console.log("err", err))
      .finally(console.log("fetchImages"));
  };

  return (
    //  <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/movies" element={<MoviesPage />} />
    //    <Route path="*" element={<HomePage />} />
    //   </Routes>
      
    <div className="App">
      <h1>Unsplash</h1>
      <p>The internet’s source of freely-usable images.</p>
      <p>Powered by creators everywhere.</p>
      <SearchBar />
      <p><span>Trending: </span>flower, wallpaper, background, happy, love</p>
    </div>
  );
}

export default App;
