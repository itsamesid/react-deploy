import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{basket},  dispatch] = useStateValue();


    //console.log('this is the basket >>>', basket)

    
    const addToBasket = () => {
        // dispatch the item into the data Layer
        dispatch({
            type: "ADD_TO_CRYPTOCART",

            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };

    return (
    <div className="product">

        

        <div className="product__info">

            <p> {title}</p>
            <p className="product__price">
                <small>BTC  </small>
                <strong>{ price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>☆</p>
                    ))}
                
              
                
            </div>

        </div>

        <img src= {image} alt=""/>
        <button onClick={addToBasket}>Add to CryptoCart</button>
       
        



        </div>
    )
}

export default Product;
