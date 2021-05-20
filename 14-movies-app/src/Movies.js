import React, { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import CustomPage from './CustomPage';
import { AppContext } from './context';
import Chip from '@material-ui/core/Chip';

const Movies = () => {

    let { generloading, generId, unSelectedGeners, handleDelete, handleClick, selectedGeners } = useContext(AppContext);


    let [loadingAll, setLoadingAll] = useState(true);
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);

    let genersUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${generId}`;



    const loadData = async () => {
        let response = await fetch(genersUrl);
        let jsonData = await response.json();

        if (jsonData) {
            setData(jsonData, "movies");
            setLoadingAll(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadData();
    }, [page])

    useEffect(() => {
        loadData();
    }, [generId])

    return (
        <>
            <Navbar />
            {
                loadingAll ? null :
                    <div className="container">
                        <div className="section">
                            <div className="header">
                                <h2 className="title">Movies</h2>
                            </div>
                            {
                                generloading ? null : <div className="gener">
                                    {
                                        generId === '' ?
                                            unSelectedGeners.map((item) => {
                                                return (
                                                    <>
                                                        <Chip className="chip" label={item.name}
                                                            clickable
                                                            onClick={() => handleClick(item.id)}
                                                        />
                                                    </>
                                                )
                                            })
                                            :
                                            <>
                                                {
                                                       selectedGeners.map((item) => {
                                                        return (
                                                            <>
                                                                <Chip className="chip" label={item.name}
                                                                    onDelete={() => handleDelete(item.id)}
                                                                    color="primary"
                                                                />
                                                            </>
                                                        )
                                                    })
                                                }

                                                {
                                                    unSelectedGeners.map((item) => {
                                                        return (
                                                            <>
                                                                <Chip className="chip" label={item.name}
                                                                    clickable
                                                                    onClick={() => handleClick(item.id)}
                                                                />
                                                            </>
                                                        )
                                                    })   
                                                }
                                            </>
                                    }
                                </div>
                            }
                            {
                                data.results.map((item) => {
                                    return (
                                        <Container key={item.id} {...item} type="movie"></Container>
                                    )
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

export default Movies;
