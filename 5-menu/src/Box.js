import React from 'react';

const Box = (props) => {
    let { title, category, price, img, desc } = props;

    return (
        <>
            <div className="menu">
                <div className="img-box">
                    <img src={img} alt={title} />
                </div>
                <div className="content-box">
                    <div className="header-box">
                        <div className="title">
                            <h4>{title.toUpperCase()}</h4>
                        </div>
                        <div className="price">
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box;