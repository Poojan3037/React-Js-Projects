import React, { useContext } from 'react';
import { AppContext } from './context';
import SearchBar from './SearchBar';
import Cocktail from './Cocktail';

const Home = () => {

    const { loading, data } = useContext(AppContext);

    if (loading) {
        return (
            <>
                <div className="container">
                    <div className="about">
                        <h1>loading....</h1>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <div className="main">
                        <div className="search-div">
                            <SearchBar />
                        </div>
                        <div className="cocktail-div">

                            {
                                data.length === 0 ? <h1>No item found....</h1> :
                                    data.map((item) => {
                                        return (
                                            <Cocktail key={item.id} {...item} />
                                        )
                                    })
                            }

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;