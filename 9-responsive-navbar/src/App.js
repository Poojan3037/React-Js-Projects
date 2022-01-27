import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';

const App = () => {
    let [show, updateShow] = useState(true);
    return (
        <>
            <nav>
                <div className="title">
                    <h1>React Js</h1>
                </div>
                <div className={`links ${show?'link-slide':null}`}>
                    <ul className="links-ul">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Course</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="social-ul">
                        <li><a href="#"><FacebookIcon /></a></li>
                        <li><a href="#"><InstagramIcon /></a></li>
                        <li><a href="#"><TwitterIcon /></a></li>
                        <li><a href="#"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className="hambug">
                    <button onClick={() => updateShow(!show)}><MenuIcon /></button>
                </div>
            </nav>
        </>
    )
}

export default App;