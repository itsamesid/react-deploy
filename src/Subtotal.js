import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    
                    

                    {/*Part of the homework*/}
                    <p>
                        SubTotal ({basket.length} items):  <strong> {value} </strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />   This order contains a Present
                </small>
                </>

            )}
            decimalScale={8}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"BTC   "}
        />
                    
    
    
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
    );
}

export default Subtotal;
