import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);

  // useEffect con async y await
  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/initialState");
  //       const data = await response.json();
  //       setVideos(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchVideo();
  // }, []);

  return videos;
};

export default useInitialState;
