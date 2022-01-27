import React from 'react';
import Box from './Box';


const Menu=(props)=>{
    let {menu}=props;

    return(
        <>
            <div className="menubar">
                {
                    menu.map((item)=>{
                        return(
                            <>
                                <Box {...item}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Menu;