import React , {useContext, useRef, useState} from 'react';
import Styles from "./PostPage.module.css";
import vinu from "../../assests/images/vinishiya.jpeg";
import kokila from "../../assests/images/kokila.jpg";
import varsha from "../../assests/images/varsha.jpeg";
import kishore from "../../assests/images/kishore.jpeg";
import myImage from "../../assests/images/p15.jpg";
import myImage1 from "../../assests/images/p16.png"
import myImage2 from "../../assests/images/p13.jpg"
import myImage3 from "../../assests/images/p14.jpg"
import AddStory from '@mui/icons-material/AddCircleOutline';
import { datacontext } from '../../App';


function Stories() {
    const [story,setStory] = useState();
    const storyButton = useRef();
    const {user} = useContext(datacontext);

    const statusHandler = (file)=> {
        if (file && file[0]){
            const img = URL.createObjectURL(file[0]);
            setStory(img)
            console.log(img);
        }
    };
  return (
    <div  className={Styles.stories} data-aos="zoom-in">
        {story?
                <div data-aos="flip-left" className={Styles.storycard}>
                <img src={user.profilepic} alt='stories' className={Styles.storyprofile}/>
                <img src={story} alt="stories"  className={Styles.storybackground}/>
            <span className={Styles.text}>{user.username}</span>
        </div>:
        <div data-aos="flip-left" className={Styles.storycard} onClick={()=>storyButton.current.click()}>
            <AddStory />
            <p>Add Story</p>
        </div>}
        <input type='file' accept="image/*" ref={storyButton} style={{display:"none"}} onChange={(e)=>statusHandler(e.target.files)} />
        <div data-aos="flip-left" className={Styles.storycard}>
            <img src={varsha} alt='stories' className={Styles.storyprofile}/>
            <img src={myImage} alt="stories"  className={Styles.storybackground}/>
            <span className={Styles.text}>Emily</span>
        </div>
        <div data-aos="flip-left" className={Styles.storycard}>
            <img src={kokila} alt='stories' className={Styles.storyprofile}/>
            <img src={myImage1} alt="stories"  className={Styles.storybackground}/>
            <span className={Styles.text}>Lily</span>
        </div>
        <div data-aos="flip-left" className={Styles.storycard}>
            <img src={vinu} alt='stories' className={Styles.storyprofile}/>
            <img src={myImage2} alt="stories"  className={Styles.storybackground}/>
            <span className={Styles.text}>Sophia</span>
        </div>
        <div data-aos="flip-left" className={Styles.storycard}>
            <img src={kishore} alt='stories' className={Styles.storyprofile}/>
            <img src={myImage3} alt="stories"  className={Styles.storybackground}/>
            <span className={Styles.text}>Benjamin</span>
        </div>
        
      </div>
    
  )
}

export default Stories
