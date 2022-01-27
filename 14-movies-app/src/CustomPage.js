import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

const CustomPage = (props) => {

    let {numberOfpage,setPage}=props;


    const handleChnage=(p)=>{
        setPage(p);
        window.scroll(0,0);
    }

    return (
        <>
            <div>
                <ThemeProvider theme={darkTheme}>
                    <Pagination count={numberOfpage} onChange={(e)=>handleChnage(e.target.textContent)} hidePrevButton hideNextButton/>
                </ThemeProvider>
            </div>
        </>
    )
}

export default CustomPage;