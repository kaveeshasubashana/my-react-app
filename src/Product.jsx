import "./Product.css";
function Product(props){

    if(props.stock === 0){
        return(
            <div>
                <p>{props.title}out of stock</p>
            </div>

        );
    }

    return (

        <div>
        <h1>{props.title}</h1>
        <p>{props.decs}</p>
        <p>{props.price}</p>
        <button onClick={()=>{alert("product aded to cart")} }>add to cart</button>
     
        </div>
    );
}

export default Product;