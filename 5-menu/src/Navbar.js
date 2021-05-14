import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Navbar = (props) => {
    let { listCategory , filterMenu} = props;
    return (
        <>
            <div className="navbar">
                {
                    listCategory.map((nav) => {
                        return (
                            <Button className="btn" onClick={()=>filterMenu(nav)}>{nav}</Button>
                            )
                        })
                    }
            </div>
        </>
    )

}

export default Navbar;