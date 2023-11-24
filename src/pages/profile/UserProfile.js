import React , {useContext, useRef, useState } from 'react'
import Styles from "./Profile.module.css";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import Play from '@mui/icons-material/VolumeUp';
import Pause from '@mui/icons-material/VolumeOff';
import { datacontext } from '../../App';

function UserProfile() {
    const {user,postData} = useContext(datacontext);
    const [play,setPlay] = useState(false);
    const playbutton = useRef();
    
  return (
    <div className={Styles.body}>
        <audio style={{display:"none"}} src={user.profilemusic} ref={playbutton} />
            <div className={Styles.container}>
                    <div className={Styles.profile_card}>
                        <div className={Styles.profile_header} style={{backgroundImage:`url(${user.coverpic})`}}>
                            <div className={Styles.audiodiv}>
                            { play ? <Play onClick={()=>{playbutton.current.pause();setPlay(false);}} className={Styles.audio}/> :
                             <Pause onClick={()=>{playbutton.current.play();setPlay(true);}} className={Styles.audio}/>}
                            </div>
                            <div className={Styles.main_profile}>
                                <div className={Styles.profile_image} style={{backgroundImage:`url(${user.profilepic})`}}></div>
                                <div className={Styles.profile_names}>
                                    <h1 className={Styles.username}>{user.username}</h1>
                                    <div className={Styles.profile_buttons}>
                                        <Link to="/editprofile" className={Styles.link}>Edit Profile</Link>
                                        <div className={Styles.social_media}>
                                            <span>Follow me in:</span>
                                            <FacebookIcon />
                                            <TwitterIcon />
                                            <LinkedInIcon />
                                            <InstagramIcon />
                                            <GitHubIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.profile_actions}>
                            
                            <div className={Styles.profileRightBottom}>
                            {postData.map((item) => {
                                if (item.name === user.username) {
                                    return (
                                    <div>
                                        {item.type === "image"?
                                        <img src={item.url} alt={item.caption} />:
                                        <video src={item.url} alt={item.caption} autoPlay muted loop/>}
                                        <p>{item.caption}</p>
                                    </div>
                                    );
                                }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}
   
export default UserProfile