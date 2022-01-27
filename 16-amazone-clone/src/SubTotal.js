import React, { useContext, useState } from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { AppContext } from './context';
import { useHistory } from 'react-router';

const SubTotal = () => {

    let history=useHistory();

    const { cart, total ,addAddress} = useContext(AppContext);

    let [f1,setf1]=useState('');
    let [f2,setf2]=useState('');
    let [f3,setf3]=useState('');
    let [f4,setf4]=useState('');
    let [f5,setf5]=useState('');
    let [f6,setf6]=useState('');
    let [f7,setf7]=useState('');
    let [f8,setf8]=useState('');

    const checkout=(e)=>{
        e.preventDefault();
        let add={
            name:f1,
            number:f2,
            pincode:f3,
            house:f4,
            area:f5,
            landmark:f6,
            city:f7,
            state:f8
        }

        addAddress(add);
        history.push('/payment')
    }


    return (
        <>
            <div className="subtotal">

                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal ({cart.length} items): <strong>$ {total}</strong>
                            </p>
                            <small className="subtotal-gift">
                                <input type="checkbox" /> This order contains a gift
                             </small>
                        </>
                    )}
                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thosandSeparator={true}
                    prefix={"$"}
                />

                <div >
                    <form onSubmit={checkout} className="delivery">
                    <input required type="text" placeholder="Full name" value={f1} onChange={(e)=>setf1(e.target.value)}></input>
                    <input required type="text" placeholder="Mobile number" value={f2} onChange={(e)=>setf2(e.target.value)}></input>
                    <input required type="text" placeholder="Pincode" value={f3} onChange={(e)=>setf3(e.target.value)}></input>
                    <input required type="text" placeholder="Flat,House no.,Building,Company,Apartment" value={f4} onChange={(e)=>setf4(e.target.value)}></input>
                    <input required type="text" placeholder="Area,Colony,Street,Sector,Village" value={f5} onChange={(e)=>setf5(e.target.value)}></input>
                    <input required type="text" placeholder="Landmark e.g near Apollo Hospital" value={f6} onChange={(e)=>setf6(e.target.value)}></input>
                    <input required type="text" placeholder="Town/City" value={f7} onChange={(e)=>setf7(e.target.value)}></input>
                    <input required type="text" placeholder="State" value={f8} onChange={(e)=>setf8(e.target.value)}></input>
                <button type="submit">Procced to Checkout</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SubTotal;