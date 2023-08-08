import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptops from "./components/Laptops";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const url = "https://demoapi.com/api/laptop";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const laptops = await response.json();
      setLoading(false);
      setLaptops(laptops);
    })();
  }, []);

  const handleSort = () => {
    setSortAscending(!sortAscending);
    setLaptops((prevLaptops) =>
      prevLaptops.slice().sort((a, b) => {
        if (sortAscending) {
          return a.weight - b.weight; 
        } else {
          return b.weight - a.weight; 
        }
      })
    );
  };

  const handleFilter = (event) => {
    setFilterText(event.target.value);
    setLaptops((prevLaptops) =>
      prevLaptops.filter((l) =>
        l.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>API</h1>
      <input
        type="text"
        value={filterText}
        onChange={handleFilter}
        placeholder="Filter laptops by name"
      />
      <button onClick={handleSort}>Sort</button>
      {loading ? (
        <LoadingMask />
      ) : (
        laptops?.map((l) => (
          <Laptops key={l.brand} brand={l.brand} name={l.name} weight={l.weight} />
        ))
      )}
    </div>
  );
};

export default App;
