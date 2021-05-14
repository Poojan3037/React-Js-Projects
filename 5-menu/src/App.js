import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import data from './data';

const App = () => {

    let [menuData, updateMenuData] = useState(data);

    let listCategory = ["all", ...new Set(data.map((item) => item.category))]

    let filterMenu = (cat) => {
        if (cat === "all") {
            let newMenu = data.map((item) => item)
            updateMenuData(newMenu)
        } else {
            let newMenu = data.filter((item) => item.category === cat)
            updateMenuData(newMenu)
        }
    }

    return (
        <>
            <div className="heading">
                <h1>Our Menu</h1>
            </div>
            <div className="container">
                <Navbar listCategory={listCategory} filterMenu={filterMenu} />
                <Menu menu={menuData} />
            </div>
        </>
    )
}

export default App;