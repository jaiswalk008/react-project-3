import AddCandy from "./Components/UI/AddCandy";
import './App.css'
import Cart from "./Components/Cart/Cart";
import CandyList from "./Components/UI/CandyList";
import { useState } from "react";
function App() {
  const [candyList ,setCandyList] = useState([]);

  const addCandy=(candy) =>{
    const updatedCandyList = [...candyList , candy];
    setCandyList(updatedCandyList);
  }

  return (
    <div className="App">
      <Cart/>
      <AddCandy length={candyList.length} onAddCandy ={addCandy}/>
      <CandyList candyList= {candyList}/>
    </div>
  );
}

export default App;
