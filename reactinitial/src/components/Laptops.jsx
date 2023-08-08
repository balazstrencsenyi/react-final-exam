import React, { useState } from "react";

const Laptops = ({ brand, name, weight }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>{name}</h2>
      {show && (
        <>
          <p>Brand: {brand}</p>
          <p>Weight: {weight}</p>
        </>
      )}
      <button onClick={toggle}>{show ? "Show less" : "Show more"}</button>
    </div>
  );
};

export default Laptops;
