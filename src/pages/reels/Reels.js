import React, { useContext, useRef, useState, useEffect } from 'react';
import Styles from './Reels.module.css';
import { datacontext } from '../../App';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/NearMe';
import Add from '@mui/icons-material/AddAPhoto';
import Delete from '@mui/icons-material/Delete';

function Reels() {
  const [isVideoPlaying, setIsVideoPlaying] = useState([]);
  const { reelsData, setReelsData, user } = useContext(datacontext);
  const [reelUrl, setReelUrl] = useState("");
  const vidRefs = useRef([]);
  const reelRef = useRef();


  const onVideoClick = (index) => {
    const updatedIsVideoPlaying = [...isVideoPlaying];
    if (updatedIsVideoPlaying[index]) {
      vidRefs.current[index].pause();
      updatedIsVideoPlaying[index] = false;
    } else {
      vidRefs.current[index].play();
      updatedIsVideoPlaying[index] = true;
    }
    setIsVideoPlaying(updatedIsVideoPlaying);
  };

  const handleLike = (index) => {
    const updatedReelsData = [...reelsData];
    const currentItem = updatedReelsData[index];
    if (!currentItem.liked) {
      currentItem.likes++;
      currentItem.liked = true;
    } else {
      currentItem.likes--;
      currentItem.liked = false;
    }
    setReelsData(updatedReelsData);
  };

  const videoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setReelUrl(URL.createObjectURL(vid));
        console.log(reelUrl);
    }
  };

  const handleDelete = (index) => {
    setReelsData(reelsData.filter((item,i)=>i!== index));
  }

  useEffect(() => {
    if (reelUrl) {
        let newReel={
            channel: user.username,
            likes:"0",
            comments:"0",
            url: reelUrl,
            liked: false,
        }  
        setReelsData([newReel,...reelsData]);
        setReelUrl(null);
  }}, [reelUrl]);

  return (
    <div className={Styles.App}>
        <Add className={Styles.add} onClick={()=>reelRef.current.click()}/>
        <input type='file' accept='video/*' ref={reelRef} style={{display:'none'}} onChange={(e)=>videoChange(e)}/>
      <div className={Styles.video_container}>
        <div className={Styles.video_player}>
          {reelsData.map((list, i) => (
            <div className={Styles.video_play} key={i}>
              <video
                onClick={() => onVideoClick(i)}
                className={Styles.video}
                ref={(el) => (vidRefs.current[i] = el)}
                src={list.url}
                loop
              />
              <div className={Styles.video_footer}>
                <div className={Styles.footer_buttons}>
                  <div className={Styles.flex_box}>
                    {list.liked ?<Favorite className={Styles.hover} style={{color:"red"}} onClick={()=>handleLike(i)}/>: <FavoriteBorder className={Styles.hover} onClick={()=>handleLike(i)} />}
                    {list.likes}
                  </div>
                  <div className={Styles.flex_box}>
                    <Comment className={Styles.hover} />
                    {list.comments}
                  </div>
                  <div className={Styles.flex_box}>
                    {list.channel === user.username &&
                    <Delete className={Styles.hover} onClick={()=>handleDelete(i)}/>}
                  </div>
                </div>
                <div className={Styles.video_text}>
                  <h3>{list.channel}</h3>
                  { user.username !== list.channel &&
                  <h4 className={Styles.follow}>FOLLOW</h4>}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
  );
}

export default Reels;
