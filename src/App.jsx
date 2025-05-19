import Product from "./Product";

function App() {
  return (
    <>
      <div>
        <h1>hello world</h1>
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={5} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={4} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={7} />
        <Product title="product 1" decs="product 1 decsription" price={34343} stock={0} />
        
      </div>
    </>
  )
}

export default App
