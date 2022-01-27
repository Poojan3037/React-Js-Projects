import React from 'react';
import { NavLink } from 'react-router-dom';

const Cocktail=(props)=>{

    let{id,name,img,glass,type}=props;
    console.log(id,name,img,glass,type)

    return(
        <>
        <div className="card">
            <div className="img-box">
                <img src={img} alt={name}/>
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h3>{glass}</h3>
                <h4>{type}</h4>
                <div className="details-btn">
                <NavLink to={`/singleCocktail/${id}`} className="btn">Details</NavLink>
                </div>
            </div>
        </div>
        </>

    )
}

export default Cocktail;