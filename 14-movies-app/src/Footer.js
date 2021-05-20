import React from 'react';
import { NavLink } from 'react-router-dom';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const Footer=()=>{
    return(
        <>
        <footer>
            <NavLink className="link-btn" activeClassName="active_link" exact to="/"><WhatshotIcon/> Trending</NavLink>
            <NavLink  className="link-btn" activeClassName="active_link" exact to="/movies"><MovieIcon/> Movies</NavLink>
            <NavLink className="link-btn" activeClassName="active_link" exact to="/web"><TvIcon/> Tv Shows</NavLink>
            <NavLink className="link-btn" activeClassName="active_link" exact to="/search"><SearchIcon/> Search</NavLink>
        </footer>
        </>
    )
}

export default Footer;