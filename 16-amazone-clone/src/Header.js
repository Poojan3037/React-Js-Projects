import React, { useContext, useState } from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { AppContext } from './context';
import firebase from './firebase';


const Header = () => {
    let [sign, setSign] = useState('sigin in');

    const { cart,user } = useContext(AppContext);

    const logout=()=>{
        firebase.auth().signOut();
    }

    return (
        <>
            <div className="header">
                <Link to="/">
                    <div className="header-logo">
                        <img className="header-img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
                    </div>
                </Link>

                <div className="header-search">
                    <input className="header-search-text" type="text" />
                    <SearchIcon className="header-search-icon" />
                </div>

                <div className="header-nav">

                    <div className="header-option">
                        <span className="header-option-upper">Hello {user ? user.email : "Guest "}</span>
                        {
                            user ? <span className="header-option-down signout" onClick={logout}>Sign out</span> :
                                <Link to='/signin'>
                                    <span className="header-option-down" >Sign in</span>
                                </Link>
                        }
                    </div>
                    <Link to="/order">
                    <div className="header-option">
                        <span className="header-option-upper">Returns</span>
                        <span className="header-option-down">& Orders</span>
                    </div>
                    </Link>
                    <div className="header-option">
                        <span className="header-option-upper">Your</span>
                        <span className="header-option-down">Prime</span>
                    </div>
                </div>

                <Link to="/checkout">
                    <div className="header-cart">
                        <ShoppingCartIcon className="header-cart-icon" />
                        <span className="header-option-down">{cart.length}</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header;