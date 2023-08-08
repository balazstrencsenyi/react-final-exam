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
      <button onClick={toggle}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Laptops;
