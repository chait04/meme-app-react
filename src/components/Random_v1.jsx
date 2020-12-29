import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function Random() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const { data } = await axios.get(url);
      const imgSrc = await data.data.images.downsized_large.url;
      setGif(imgSrc);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGif();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const handleClick = (e) => {
    setLoading(true);
    fetchGif();
  };

  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <img width="500px" src={gif} alt="random gif" />
        <button onClick={handleClick} type="submit">
          Generate
        </button>
      </div>
    </>
  );
}

export default Random;
