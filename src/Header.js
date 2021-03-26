import React from 'react';
import "./Header.css"; 
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";






function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }



    return (
        <div className="header">
            
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG44.png" />
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text" />

                <img className='header__searchIcon' src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" />
               
            </div>

            

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello! {!user ? 'Guest' : user.email}
                    </span>

                        <span className='header__optionLineTwo'> {user ? 'Sign Out' : 'Sign In'} </span>
                        
        
                </div>
                </Link>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>

                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>

                

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Crypto Wallet
                    </span>
                    
                 
                </div>
                
              
                    <Link to="/checkout">
                    <img  className="header__optionBasket" src="https://www.freeiconspng.com/uploads/grocery-basket-icon-1.png" />
                  
                </Link>
                <span className=" header__optionBasket header__basketCount">{ basket?.length}</span>
              
            </div>
        </div>


       
    );
}

export default Header
