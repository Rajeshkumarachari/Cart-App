import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setData(response.data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="ProductContainer">
      {data && data.map((item) => <Product key={item.id} value={item} />)}
    </div>
  );
};

export default Home;
