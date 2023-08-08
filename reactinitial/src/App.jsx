import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptops from "./components/Laptops";

const url = "https://demoapi.com/api/laptop";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);  
      const laptops = await response.json();
      setLoading(false);
      setLaptops(laptops);  
    })();
  }, []);

  return (
    <div>
      <h1>API</h1>
      {loading ? <LoadingMask /> : laptops?.map((l) => (<Laptops key={l.brand} name={l.name} weight={l.weight} />))}
    </div>
  );
};

export default App;
