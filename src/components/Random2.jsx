import React from "react";

import useGif from "../useGif";

function Tag2() {
  const { gif, fetchGif } = useGif();

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <img width="500px" src={gif} alt="random gif" />
      <button onClick={handleClick} type="submit">
        Generate
      </button>
    </div>
  );
}

export default Tag2;
