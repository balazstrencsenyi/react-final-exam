import React, { useState } from "react";
import Button from '@mui/material/Button';

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

      <Button variant ="contained" onClick={toggle}>{show ? "Show less" : "Show more"}</Button>
    </div>
  );
};

export default Laptops;
