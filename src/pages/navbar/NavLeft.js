import React, {useState , useContext} from 'react'
import Styles from "./Nav.module.css";
import  Feed  from "@mui/icons-material/RssFeed";
import Chat from '@mui/icons-material/Forum';
import  PlayCircleFilledOutlined  from "@mui/icons-material/PlayCircleFilledOutlined";
import Explore from '@mui/icons-material/Explore';
import Music from '@mui/icons-material/LibraryMusic';
import Game from '@mui/icons-material/SportsEsports';
import WorkOutline from "@mui/icons-material/WorkOutline";
import ColorIcon from '@mui/icons-material/ColorLens';
import Newspaper from '@mui/icons-material/Newspaper';
import { ChromePicker } from 'react-color';
import {Link} from "react-router-dom";
import { Close } from '@mui/icons-material';
function NavLeft() {
  
    const[close,setClose]=useState(false)
    const[color,setColor] = useState({"background":"#fff","text-primary":"000"});
    const view=()=>{
        setClose(true)
    }

    const handleColorChange = (name,val) => {
      setColor((prevColor) => ({
        ...prevColor,
        [name]: val,
      }));
      document.documentElement.style.setProperty(
        `--${name}`,color[name]
      )
    };

    return (
      <>
      <div>
      {
            close &&
            <div className={Styles.product_details}>
                <div className={Styles.container}>
                  <div>
                    <h3>Choose Your Background Color !!</h3>
                    <ChromePicker  color={color.background} onChange={(e)=>{handleColorChange("background",e.hex);handleColorChange("text-secondary",e.hex)}} className={Styles.picker}/>
                  </div>
                  <div>
                    <h3>Choose Your Primary Color !!</h3>
                    <ChromePicker color={color['text-primary']} onChange={(e)=>handleColorChange("text-primary",e.hex)} className={Styles.picker}/>
                  </div>
                  <Close onClick={()=>setClose(false)} className={Styles.close}/>
                </div>
            </div>} 
      </div>
      
      <div  className={Styles.sidebar}>
      <div className={Styles.sidebarWrapper}>
        <ul className={Styles.sidebarList} data-aos='fade-right'>
        <Link to="/">
          <li className={Styles.sidebarListItem}>
            <Feed className={Styles.sidebarIcon}/>
            <span className={Styles.sidebarListItemText}>Feed</span>
          </li>
          </Link>
          <Link to="/chat">
          <li className={Styles.sidebarListItem}>
            <Chat className={Styles.sidebarIcon} />
            <span className={Styles.sidebarListItemText}>Chat</span>
          </li>
          </Link>
          <Link to="/explore">
          <li className={Styles.sidebarListItem}>
            <Explore className={Styles.sidebarIcon} />
            <span className={Styles.sidebarListItemText}>Explore</span>
          </li>
          </Link>
          <Link to="/reels">
          <li className={Styles.sidebarListItem}>
            <PlayCircleFilledOutlined className={Styles.sidebarIcon} />
            <span className={Styles.sidebarListItemText}>Swipe</span>
          </li>
          </Link>
          <Link to="/music">
          <li className={Styles.sidebarListItem}>
            <Music className={Styles.sidebarIcon}/>
            <span className={Styles.sidebarListItemText}>Music</span>
          </li>
          </Link>
          <Link to="/game">
          <li className={Styles.sidebarListItem}>
            <Game className={Styles.sidebarIcon} />
            <span className={Styles.sidebarListItemText}>Game</span>
          </li>
          </Link>
          <Link to="/news">
          <li className={Styles.sidebarListItem}>
            <Newspaper className={Styles.sidebarIcon} />
            <span className={Styles.sidebarListItemText}>News</span>
          </li>
          </Link>
          <Link to="/subscription">
          <li className={Styles.sidebarListItem}>
            <WorkOutline className={Styles.sidebarIcon}/>
            <span className={Styles.sidebarListItemText}>Subscription</span>
          </li>
          </Link>
          <li className={Styles.sidebarListItem} onClick={view}>
            <ColorIcon className={Styles.sidebarIcon}/>
            <span className={Styles.sidebarListItemText}>Custom Theme</span>
          </li>
        </ul>
        </div>
    </div>
      </>
  )
}

export default NavLeft