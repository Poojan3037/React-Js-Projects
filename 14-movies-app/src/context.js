
import React, { createContext, useEffect, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {


    let [loading, setLoading] = useState(true);
    let [generloading, setGenerLoading] = useState(true);
    let [id, setId] = useState('');
    let [data, setData] = useState([]);
    let [vedio, setvedio] = useState([]);
    let [review,setReview]=useState([]);
    let [credit,setCredit]=useState([]);
    let [type, setType] = useState('');

    let [movieGenerData, setMovieGenerData] = useState([]);
    let [tvGenerData, setTvGenerData] = useState([]);

    let [selectedGeners, setSelectedGeners] = useState([]);
    let [unSelectedGeners, setUnSelectedGeners] = useState([]);
    let [generId, setGenerId] = useState('');

    let [selectedTVGeners, setSelectedTVGeners] = useState([]);
    let [unSelectedTVGeners, setUnSelectedTVGeners] = useState([]);
    let [generTVId, setGenerTVId] = useState('');



    const setTypeId = (i) => {
        setId(i);
    }

    const settype = (i) => {
        setType(i);
    }


    let url = ""
    let vedioUrl = ''
    let reviewUrl=''
    let creditUrl=''
    if (type === "movie") {
        if (id) {
            url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API}&language=en-US`;
            vedioUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`;
            reviewUrl=`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`;
            creditUrl=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API}&language=en-US`;
        }
    } else {
        if (id) {
            url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API}&language=en-US`;
            vedioUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`;
            reviewUrl=`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`;
            creditUrl=`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_API}&language=en-US`;
        }

    }



    // specific movie
    const loadData = async () => {
        setLoading(true)
        let response = await fetch(url);
        let jsonData = await response.json();

        if (jsonData) {
            setData(jsonData);
        }

        let responseVedio = await fetch(vedioUrl);
        let jsonVedio = await responseVedio.json();

        if (jsonVedio) {
            setvedio(jsonVedio);
        }


        let responseReview = await fetch(reviewUrl);
        let jsonReview = await responseReview.json();

        if (jsonReview) {
            setReview(jsonReview);
            
        }

        let responseCredit = await fetch(creditUrl);
        let jsonCredit = await responseCredit.json();

        if (jsonCredit) {
            setCredit(jsonCredit);
            setLoading(false);
        }

    }



    // all movie gener

    let allMovieGener = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API}&language=en-US`;
    let allTvGener = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API}&language=en-US`;


    const loadGener = async () => {
        setGenerLoading(true);
        let response = await fetch(allMovieGener);
        let jsonData = await response.json();

        if (jsonData) {
            setMovieGenerData(jsonData);
            let newArr = jsonData.genres.map((item) => item)
            setUnSelectedGeners(newArr);
        }

        let Tvresponse = await fetch(allTvGener);
        let TvjsonData = await Tvresponse.json();

        if (TvjsonData) {
            setTvGenerData(TvjsonData);
            let newArr = TvjsonData.genres.map((item) => item)
            setUnSelectedTVGeners(newArr);
            setGenerLoading(false);
        }
    }




    // set generes for movie


    const handleClick = (id) => {
        let newStr=undefined;

        if (generId === '') {
            newStr=id;
            setGenerId(String(newStr));

            let newArr = unSelectedGeners.filter((item) => item.id !== id)
            setUnSelectedGeners(newArr);

            let newArr2=movieGenerData.genres.filter((item)=>item.id===id)
            setSelectedGeners([...selectedGeners,newArr2[0]])
        }else{
            newStr=generId+','+id;
            setGenerId(newStr);

            let newArr = unSelectedGeners.filter((item) => item.id !== id)
            setUnSelectedGeners(newArr)

            let newArr2=movieGenerData.genres.filter((item)=>item.id===id)
            setSelectedGeners([...selectedGeners,newArr2[0]])
        }


    }


    const handleDelete = (id) => {

        let arr=generId.split(',');

        let newArr3=arr.filter((item)=>item!=id)
        newArr3=String(newArr3);
        setGenerId(newArr3)

        let newArr=selectedGeners.filter((item)=>item.id===id)
        setUnSelectedGeners([...unSelectedGeners,newArr[0]])

        let newArr2=selectedGeners.filter((item)=>item.id!==id)
        setSelectedGeners(newArr2)

    }


    // set geners for tv

    const handleTVClick = (id) => {
        let newStr=undefined;

        if (generTVId === '') {
            newStr=id;
            setGenerTVId(String(newStr));
            
            let newArr = unSelectedTVGeners.filter((item) => item.id !== id)
            setUnSelectedTVGeners(newArr);
            
            let newArr2=tvGenerData.genres.filter((item)=>item.id===id)
            setSelectedTVGeners([...selectedTVGeners,newArr2[0]])
        }else{
            newStr=generTVId+','+id;
            setGenerTVId(newStr);

            let newArr = unSelectedTVGeners.filter((item) => item.id !== id)
            setUnSelectedTVGeners(newArr)

            let newArr2=tvGenerData.genres.filter((item)=>item.id===id)
            setSelectedTVGeners([...selectedTVGeners,newArr2[0]])
        }


    }


    const handleTVDelete = (id) => {

        let arr=generTVId.split(',');

        let newArr3=arr.filter((item)=>item!=id)
        newArr3=String(newArr3);
        setGenerTVId(newArr3)

        let newArr=selectedTVGeners.filter((item)=>item.id===id)
        setUnSelectedTVGeners([...unSelectedTVGeners,newArr[0]])

        let newArr2=selectedTVGeners.filter((item)=>item.id!==id)
        setSelectedTVGeners(newArr2)

    }

    useEffect(() => {
        loadData();
    }, [id])


    useEffect(() => {
        loadGener();
    }, [])












    return (
        <AppContext.Provider
            value={
                {
                    data,
                    vedio,
                    setTypeId,
                    settype,
                    loading,
                    generloading,
                    movieGenerData,
                    tvGenerData,
                    handleClick,
                    handleDelete,
                    selectedGeners,
                    unSelectedGeners,
                    generId,
                    unSelectedTVGeners,
                    generTVId,
                    selectedTVGeners,
                    handleTVClick,
                    handleTVDelete,
                    review,
                    credit,
                    
                }
            }
        >
            {children}
        </AppContext.Provider>
    )


}

export { AppContext, AppProvider }