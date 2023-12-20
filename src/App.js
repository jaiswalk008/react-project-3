import AddCandy from "./Components/UI/AddCandy";
import './App.css';
import Cart from "./Components/Cart/Cart";
import CandyList from "./Components/UI/CandyList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [candyList, setCandyList] = useState([]);

  async function fetchProducts() {
    try {
      const res = await axios.get('https://crudcrud.com/api/84094fcb97b44c50a43708f266d80a0a/products');
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setCandyList(products);
    };

    fetchData();
  }, []);

  const addCandy = (candy) => {
    const updatedCandyList = [...candyList, candy];
    setCandyList(updatedCandyList);
  };

  return (
    <div className="App">
      <Cart />
      <AddCandy length={candyList.length} onAddCandy={addCandy} />
      <CandyList candyList={candyList} />
    </div>
  );
}

export default App;
