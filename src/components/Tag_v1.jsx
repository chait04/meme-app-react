import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function Tag() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");
  const [loading, setLoading] = useState(true);

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchGif(tag);
    setLoading(false);
  }, [tag]);

  const handleClick = () => {
    setLoading(true);
    fetchGif(tag);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div className="container">
        <h1>Random {tag}</h1>
        <img width="500" src={gif} alt="random gif" />
        <input value={tag} onChange={(e) => setTag(e.target.value)} />
        <button onClick={handleClick}>Generate</button>
      </div>
    </>
  );
}

export default Tag;
