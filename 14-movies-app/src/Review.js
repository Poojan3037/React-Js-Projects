import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';

const Review = (props) => {
    let [contentLength, setcontentLength] = useState(true);

    let { item } = props;
    console.log(item)
    return (
        <>
            <div className="review-card">

            <div className="review-header">
                <div className="review-avtar">
                    <Avatar alt={item.author} src={`https://image.tmdb.org/t/p/w500/${item.author_details.avatar_path}`} />
                </div>
                <div className="review-name">
                    <h4 style={{margin:"0"}}>{item.author}</h4>
                    <p style={{margin:"5px 0px"}}>@{item.author_details.username}</p>
                </div>
            </div>
            <div className="review-star">
                <Rating readOnly defaultValue={item.author_details.rating || 5} max={10} />
            </div>
            <div className="review-date">
                <h5 style={{color:'wheat'}}>Uploaded on : {item.updated_at.slice(0,10)}</h5>
            </div>
            <div className="review-content">
                {
                    item.content.length < 450 ? <p>{item.content}</p> :
                    
                    contentLength ?
                    <p>{item.content.slice(0, 450)}<button className="read-btn" onClick={() => setcontentLength(!contentLength)}>. . . read more</button></p> :
                    <p>{item.content}<button className="read-btn" onClick={() => setcontentLength(!contentLength)}>. . . read less</button></p>
                }
            </div>

                </div>
        </>
    )
}

export default Review;