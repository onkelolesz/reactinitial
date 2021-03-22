import "./App.css";
import { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask/LoadingMask";
import Hotel from "./components/Hotel/Hotel";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await fetch("api/hotels")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((e) => setData(null))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingMask />
      ) : data ? (
        <>
          {data.map((d) => (
            <Hotel d={d} key={d.name} />
          ))}
        </>
      ) : (
        "Something went wrong."
      )}
    </div>
  );
};

export default App;
