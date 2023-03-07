import React from "react";
import "./product.css";
const Product = (props) =>{
    const renderProduct = props.productData.map((item)=>{
        return (
            <div className="card" key={item.id} >
                <img src={item.image} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
        )
    })
    return(
        <>
          <div className="main">
            {renderProduct}
          </div>
        </>
    )
}





export default Product;