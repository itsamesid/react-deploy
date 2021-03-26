import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
    <div className="home">
            <div className="home__container">
                <img className="home__image" src = "https://www.intelligenthq.com/wp-content/uploads/2021/02/Cryptocurrencies-1024x682.jpg"   alt=""/>

                


            <div className="home__row">
                    
            <div className="product">  
                    <Product className= "border" id="123456789" strong title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses ' price={ 0.00063} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" rating={ 5}/>
             </div>   
             <div className="product">           
                    <Product className = "border" id="234567891" title='Apple iPhone XS Max, 64GB, Space Gray - Fully Unlocked (Renewed)' price={ 0.000019} image="https://images-na.ssl-images-amazon.com/images/I/71XeQzRDyML._AC_SL1500_.jpg" rating={ 4}/> 
                    </div>   
                </div>
          

            <div className="home__row">
                    <Product className = "border" id="345678912" title=' Bluetooth 5.0 Wireless Earbuds 【24H Fast Charging Case】 ' price={ 0.0031} image="https://images-na.ssl-images-amazon.com/images/I/51XQMP45lnL._AC_SL1000_.jpg" rating={ 3} />
                    <Product className = "border" id="456789123" title=' COPPER LINE Face Mask, Washable, Reusable (Edge-Black, L) ' price={ 0.00071} image="https://images-na.ssl-images-amazon.com/images/I/51CfjFdeoML._AC_SL1200_.jpg" rating={ 4}/>
                    <Product className = "border" id="567891234" title='  Acer Predator Helios 300 Gaming Laptop ' price={ 0.025} image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg" rating={ 1}/>
                    
                </div>
                


            <div className="home__row">
            
            <Product className = "border" id="678912345" title='SAMSUNG 85-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN85TU8000FXZA, 2020 Model) ' price={ 0.046} image="https://images-na.ssl-images-amazon.com/images/I/91FcuuZwcrL._AC_SL1500_.jpg" rating={ 5}/>
            </div>
                
            

            </div>

        </div>
        
    );
}

export default Home;
