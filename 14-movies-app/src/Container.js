import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Link, NavLink } from 'react-router-dom';



const Container = (props) => {

    let notFound='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
    

    let { original_title, media_type, name, poster_path, id, release_date, vote_average, first_air_date ,type} = props;
    return (
        <>
        <Link exact to={`/singlemovies/${id}/${media_type || type}`}>
        <Badge badgeContent={vote_average} color={`${vote_average>7.5 ? "secondary" : "primary"}`} className="badge">
            <div className="movie-card">
                <div className="movie-poster">
                    <img className="poster-img" alt={original_title} src={ poster_path?`https://image.tmdb.org/t/p/w300/${poster_path}` : notFound } />
                </div>
                <div className="movie-title">
                    <h4>{original_title || name}</h4>
                </div>
                <div className="movie-info">
                    <p>{media_type || type}</p>
                    <p>{release_date || first_air_date}</p>
                </div>
            </div>
        </Badge>
        </Link>
        </>
    )
}

export default Container;