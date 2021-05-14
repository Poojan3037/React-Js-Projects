import React, { useContext } from 'react';
import {AppContext} from './context';

const SearchBar=()=>{

    let {searchText,setSearchText}=useContext(AppContext);

    return(
        <>
        <div className='search'>
            <label htmlFor="text"><h4>search your favourite cocktail</h4></label>
            <br/>
            <input type="text" id="text"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}

            />
        </div>
        </>
    )
}

export default SearchBar;