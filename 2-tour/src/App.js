import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import TourApp from './TourApp';
import Refresh from './Refresh'


const url = 'https://course-api.com/react-tours-project'

const App = () => {

    let [loading, setLoading] = useState(true);

    let [tourData, setTourData] = useState([]);


    const loadTourData = async () => {
        setLoading(true)
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setTourData(data)

        setLoading(false)
    }

    useEffect(() => {
        loadTourData();
    }, [])


    const removeItem = (id) => {
        let newTourData = tourData.filter((place) => place.id !== id)
        setTourData(newTourData)
    }

    const refresh=()=>{
        loadTourData();
    }
    
    
    if (tourData.length === 0) {
        return (
            <>
                <Refresh refresh={refresh}/>
            </>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <TourApp tour={tourData} removeItem={removeItem} />
        )
    }
}

export default App;