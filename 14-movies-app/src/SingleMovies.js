
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import { AppContext } from './context';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Review from './Review';
import Credit from './Credit';


const SingleMovies = () => {

    let { id, type } = useParams();

    let { data, setTypeId, settype, vedio, loading, review, credit } = useContext(AppContext);


    let notFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
    let defaulLang = "unknown";

    setTypeId(id);
    settype(type);

    return (
        <>
            <Navbar />
            {
                type === 'movie' ?
                    loading ? null :
                        <div className="show-div">
                            <div className="show-title">
                                <h1>{data.original_title}</h1>
                            </div>
                            <div className="show-container">
                                <div className="show-poster">
                                    <img className="show-img" src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : notFound} alt={data.original_title}></img>
                                </div>
                                <div className="show-info">
                                    <h2 className="overview"> {data.overview}</h2>
                                    <div className="credit">
                                        {
                                            credit.cast.map((item) => {
                                                return <Credit key={item.id} item={item} />
                                            })
                                        }
                                    </div>
                                    <h2>Rating : <span className="rating"> {data.vote_average}</span></h2>
                                    <h2>Release Date : <span className="rating"> {data.release_date}</span></h2>
                                    <h2>Duration : <span className="rating"> {data.runtime} minutes </span></h2>
                                    <h2>Genres :{data.genres.map((item, index) => {
                                        return (<span className="rating" key={index} style={{ marginRight: "10px" }}> {item.name}  </span>)
                                    })
                                    }
                                    </h2>
                                    <h2>Language : <span className="rating"> {data.spoken_languages[0].english_name}  </span></h2>
                                    {
                                        vedio.results[0].key ?
                                            <a className="trailer-link" href={`https://www.youtube.com/watch?v=${vedio.results[0].key}`}><YouTubeIcon /><span className="t-span"
                                            > Watch Trailer</span></a> : null
                                    }
                                    <div className="review">
                                        {
                                            review.results.map((item, index) => {
                                                return (
                                                    <Review key={index} item={item} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="xyz">

                            </div>
                        </div> :
                    loading ? null :
                        // tv
                        <div>
                            <div className="show-div">
                                <div className="show-title">
                                    <h1>{data.original_name}</h1>
                                </div>
                                <div className="show-container">
                                    <div className="show-poster">
                                        <img className="show-img" src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : notFound} alt={data.original_title}></img>
                                    </div>
                                    <div className="show-info">
                                        <h2 className="overview">{data.overview}</h2>
                                        <div className="credit">
                                            {
                                                credit.cast.map((item) => {
                                                    return <Credit key={item.id} item={item} />
                                                })
                                            }
                                        </div>
                                        <h2>Rating : <span className="rating">{data.vote_average}</span></h2>
                                        <h2>Release Date : <span className="rating">{data.first_air_date}</span></h2>
                                        <h2>Seasons : <span className="rating">{data.number_of_seasons}</span> </h2>
                                        <h2>Total Episodes : <span className="rating">{data.number_of_episodes}</span> </h2>
                                        {
                                            data.episode_run_time ?
                                                <h2>Episode Duration :  {<span className="rating"> {data.episode_run_time[0]} minutes</span>}  </h2> : null
                                        }
                                        <h2>Genres :{data.genres.map((item, index) => {
                                            return (<span className="rating" key={index} style={{ marginRight: "10px" }}> {item.name}  </span>)
                                        })
                                        }
                                        </h2>
                                        <h2>Language : <span className="rating"> {data.spoken_languages[0] ? data.spoken_languages[0].english_name : defaulLang}  </span></h2>
                                        {
                                            vedio.results[0].key ?
                                                <a className="trailer-link" href={vedio.results[0].key ? `https://www.youtube.com/watch?v=${vedio.results[0].key}` : null}><YouTubeIcon /><span className="t-span"
                                                > Watch Trailer</span></a> : null
                                        }
                                        <div className="review">
                                            {
                                                review.results.map((item, index) => {
                                                    return (
                                                        <Review key={index} item={item} />
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className="xyz">

                                </div>
                            </div>
                        </div>
            }
            <Footer />
        </>
    )
}

export default SingleMovies;