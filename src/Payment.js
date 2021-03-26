import React from 'react'
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';


    
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to="/checkout">{basket?.length} items)</Link></h1>

                
                {/*Payment Section - delivery Address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    

                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>


                
                {/*Payment Section - Review Items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>

                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct

                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                                /> 

                            
                            ))}


                    </div>
                    
                </div>

                

                {/*Payment Section - Payment Method*/}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>

                    </div>

                    <div className="payment__details">
                        {/* This will be the bitpay code*/}

                    </div>


                    </div>

                



            </div>
        </div>
    )
}

export default Payment
