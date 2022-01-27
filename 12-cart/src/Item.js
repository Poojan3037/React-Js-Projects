import React, { useContext } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AppContext} from './context';

const Item = (props) => {
    let { increaseAmount,decreseAmount,removeItem}=useContext(AppContext);
    let { id, amount, img,price, title } = props;
    return (
        <>
            <div className="item-container">
                <div className="item-info">
                    <div className="item-img">
                        <img src={img} alt={title} />
                    </div>
                    <div className="item-details">
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                        <button className="remove-btn" onClick={()=>removeItem(id)}>remove</button>
                    </div>
                </div>
                <div className="item-quantity">
                    <button  className="updown-btn" onClick={()=>increaseAmount(id)}><ExpandLessIcon className="icon"/></button>
                    <p className="amount">
                    {amount}
                    </p>    
                    <button className="updown-btn" onClick={()=>decreseAmount(id)}><ExpandMoreIcon/></button>
                </div>
            </div>
        </>
    )
}

export default Item;