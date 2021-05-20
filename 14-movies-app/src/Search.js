
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import CustomPage from './CustomPage';

const Search = () => {
    let [loading, setLoading] = useState(true);
    let [page, setPage] = useState(1);

    let [movie, setMovie] = useState('');
    let [data, setData] = useState([]);


    let url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API}&language=en-US&query=${movie}&page=1&include_adult=false`;


    const loadData = async () => {
        let response = await fetch(url);
        let jsonData = await response.json();

        if (jsonData) {
            setData(jsonData, "movies");
            setLoading(false);
        }else{
            setLoading(true)
        }
    }


    useEffect(() => {
        loadData();
    }, [movie])


        return (
            <>
                <Navbar />
                <div className="search-container">
                    <div className="heading">
                        <h2>Search Your Favourite Movies And Tv Shows</h2>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="search movie and tv show" value={movie} onChange={(e) => setMovie(e.target.value)}></input>
                    </div>

                </div>
                {
                    data.errors?null:
                    loading ? null :
                        <div className="container">
                            <div className="section">
                                {
                                    data.results.map((item) => {
                                        if(item.media_type!=='person'){

                                            return (
                                                <Container key={item.id} {...item} type="movie"></Container>
                                                )
                                            }
                                    })
                                }
                            </div>
                            <div className="page">
                                <CustomPage numberOfpage={data.total_pages} setPage={setPage} />
                            </div>
                        </div>
                }
                <Footer />
            </>
        )
    }

export default Search;