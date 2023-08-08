import { useState } from "react";

const Laptops = ({ name, weight }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div>
      <h2>{name}</h2>
      {show ? <p>{weight}</p> : null}
      <button onClick={toggle}>
      {show ? 'hide' : 'show'}
      </button>
    </div>
  );
}

  export default Laptops;