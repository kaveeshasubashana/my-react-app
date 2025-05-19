import Product from "./Product";
import { useState } from "react";

function App() {

 const [state,setStet] = useState(0);
 const [text,setText] = useState("");
  return (
    <>
      <div>
        <h1>hello world</h1>
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={5} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={4} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={7} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={0} />
        <button onClick={()=>{
          setStet(state + 1)
        }}>count button</button>
        <p>{state}</p>


        <input type="text" onChange={(e)=>{setText(e.target.value);}}/>
        <p>{text}</p>
      </div>
    </>
  )
}

export default App
