import React, { useContext } from 'react'
import Navbar from './Navbar';
import Cartbag from './Cartbag';
import {AppContext} from './context';

const App=()=>{

    let {loading,loadData,closeLoading}=useContext(AppContext);

    return(
        <>
        {
            loading ?
            <nav>
                <h1>Loading....</h1>
            </nav>:
            <>
            <Navbar/>
            <Cartbag/>
            </>
        }
        </>
    )
}

export default App;