import React, { useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DescriptionIcon from '@material-ui/icons/Description';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {AppContext} from './context';


const Sidebar = () => {
    let {isSidebar,closeSidebar}=useContext(AppContext);
    return (
        <>
            <div className={`${isSidebar ? 'sidebar-container-show' : 'sidebar-container'}`}>
                <div className="show-siderbar">
                    <h1>React Js</h1>
                    <button className="close-btn" onClick={closeSidebar}><CloseIcon /></button>
                    <div className="links">
                        <ul>
                            <li><HomeIcon /><a href="#"> Home</a></li>
                            <li><GroupIcon /><a href="#">Team</a></li>
                            <li><AssignmentIndIcon /><a href="#"> Project</a></li>
                            <li><DateRangeIcon /> <a href="#">Calendar</a></li>
                            <li><DescriptionIcon /><a href="#"> Documents</a></li>
                        </ul>
                    </div>
                    <div className="footer">
                        <ul className="social">
                            <li><a className="social-link" href="#"><FacebookIcon/></a></li>
                            <li><a className="social-link" href="#"><InstagramIcon/></a></li>
                            <li><a className="social-link" href="#"><TwitterIcon/></a></li>
                            <li><a className="social-link" href="#"><GitHubIcon/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;