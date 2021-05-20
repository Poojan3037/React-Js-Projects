import React, { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import CustomPage from './CustomPage';
import { AppContext } from './context';
import Chip from '@material-ui/core/Chip';


const Web = () => {

    let { generloading, unSelectedTVGeners, generTVId, selectedTVGeners, handleTVClick, handleTVDelete } = useContext(AppContext);

    let [loadingAll, setLoadingAll] = useState(true);
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);

    let genersUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${generTVId}`;


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
    }, [generTVId])

    return (
        <>
            <Navbar />
            {
                loadingAll ? null :
                    <div className="container">
                        <div className="section">
                            <div className="header">
                                <h2 className="title">Tv Shows</h2>
                            </div>
                            {
                                generloading ? null : <div className="gener">
                                    {
                                        generTVId === '' ?
                                            unSelectedTVGeners.map((item) => {
                                                return (
                                                    <>
                                                        <Chip className="chip" label={item.name}
                                                            clickable
                                                            onClick={() => handleTVClick(item.id)}
                                                        />
                                                    </>
                                                )
                                            })
                                            :
                                            <>
                                                {
                                                    selectedTVGeners.map((item) => {
                                                        return (
                                                            <>
                                                                <Chip className="chip" label={item.name}
                                                                    onDelete={() => handleTVDelete(item.id)}
                                                                    color="primary"
                                                                />
                                                            </>
                                                        )
                                                    })
                                                }

                                                {
                                                    unSelectedTVGeners.map((item) => {
                                                        return (
                                                            <>
                                                                <Chip className="chip" label={item.name}
                                                                    clickable
                                                                    onClick={() => handleTVClick(item.id)}
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
                                        <Container key={item.id} {...item} type="web series"></Container>
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

export default Web;