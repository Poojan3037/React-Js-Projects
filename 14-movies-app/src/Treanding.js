import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import CustomPage from './CustomPage';




const Treanding = () => {

    let [loading,setLoading]=useState(true);
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);


    let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API}&page=${page}`;

    const loadData = async () => {
        let response = await fetch(url);
        let jsonData = await response.json();

        if (jsonData) {
            setData(jsonData);
            setLoading(false); 
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadData();
    }, [page])


    return (
        <>
            <Navbar />
            {
                loading?null:
                <div className="container">
                    <div className="section">
                        <div className="header">
                            <h2 className="title">Trending</h2>
                        </div>
                    {
                        data.results.map((item)=>{
                            return(
                                <Container key={item.id} {...item}></Container>
                                )
                            })
                        }
                    </div>
                    <div className="page">
                        <CustomPage numberOfpage={10} setPage={setPage}/>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default Treanding;