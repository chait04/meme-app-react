import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchGif = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imgSrc = data.data.images.downsized_large.url;

    setGif(imgSrc);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchGif(tag);
    setLoading(false);
  }, [tag]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return { gif, fetchGif };
};

export default useGif;

// const handleClick = () => {
//     setLoading(true);
//     fetchGif(tag);
//   };
