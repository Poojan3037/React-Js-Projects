import React from 'react';

const Credit=(props)=>{

    let {item}=props;

    let notFound='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

    return(
        <>
            <div className="credit-box">
                <div className="credit-poster">
                    <img className="actor-pic" alt={item.original_name} src={item.profile_path ?  `https://image.tmdb.org/t/p/w300/${item.profile_path}`: notFound}/>
                </div>
                <div>
                    <h3>{item.original_name}</h3>
                    <h4>Character : <span className="rating">{item.character}</span></h4>
                </div>
            </div>
        </>
    )
}

export default Credit;