import React, { useState } from "react";

import useGif from "../useGif";

function Tag2() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag}</h1>
      <img width="500" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default Tag2;
