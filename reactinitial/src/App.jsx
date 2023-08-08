import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptops from "./components/Laptops";

  const url = "https://demoapi.com/api/laptop";

const App = () => {

    const [loading, setLoading] = useState(true);
    const [laptops, setLaptops] = useState(null);

  useEffect(() => {

    const fetchLaptops = async () => {
      const response = await fetch(url);  
      const laptops = await response.json();
      setLoading(false);
      setLaptops(laptops);
    }
    fetchLaptops();
  }, []);

  if (loading) {
    return (
      <div>
      <h1>API</h1>
      {loading ? <LoadingMask /> : laptops.map(l => <Laptops key={l.id} name={l.name} details={l.details} />)
      }
      </div>
    );
  }

  return (
    <div>
      <h1>Laptops</h1>
    </div>
  );
};

export default App;
