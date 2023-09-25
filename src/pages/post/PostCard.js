import React, { useState, useContext } from 'react';
import Styles from './PostCard.module.css';
import LikeBorder from '@mui/icons-material/FavoriteBorder';
import Like from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/InsertComment';
import Send from '@mui/icons-material/Send';
import Edit from '@mui/icons-material/Edit';
import Close from '@mui/icons-material/CloseOutlined';
import { datacontext } from '../../App';


function PostCard() {
  const { postData, setPostData , user} = useContext(datacontext);
  const [popup,setPopup] = useState(false);
  const [captionError, setCaptionError] = useState('');
  const [editPost,setEditPost] = useState({});
  const [editIndex,setEditIndex] = useState(null);
 
  const handleLike = (index) => {
    const updatedPostData = [...postData];
    const currentItem = updatedPostData[index];
    if (!currentItem.liked) {
      currentItem.likes++;
      currentItem.liked = true;
    } else {
      currentItem.likes--;
      currentItem.liked = false;
    }
    setPostData(updatedPostData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditPost(postData[index]);
    setPopup(true);
  }

  const handleSave = (e) => {
    e.preventDefault();
    const updatedPostData = [...postData];
    const currentItem = updatedPostData[editIndex];
    if (currentItem.caption.trim() === '') {
      setCaptionError('caption is required');
    } else{
      currentItem.caption = editPost.caption;
      setPostData(updatedPostData);
      setPopup(false);
      setEditIndex(null);
      setEditPost({});
      setCaptionError('');
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setPostData(postData.filter((item,i)=>i !== editIndex));
    setPopup(false);
    setEditIndex(null);
    setEditPost({});
    setCaptionError('');
  }

  return (
    <div className={Styles.post}>
      {postData.map((item,i) => (
        
        <div className={Styles.feeds} key={item.id}>
          <div className={Styles.feed}>
            <div className={Styles.head}>
              <div className={Styles.user}>
                <div className={Styles.profile}>
                  <div className={Styles.profile_info}>
                    {item.profilepic && (
                      <img src={item?.profilepic} alt='profile' className={Styles.profile_photo} />
                    )}
                  </div>
                  <div className={Styles.header}>
                    <div className={Styles.edit}>
                      <h3 className={Styles.name}>{item.name}</h3>
                      { item.liked1 ?
                      <small>Chennai, 10 minutes ago</small>:
                      <small>Chennai, 0 minutes ago</small>
                      }</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.photo}>
              {item.type === "image"?
              <img src={item.url} alt='post' />:<video src={item.url} alt='post' muted autoPlay loop />}
            </div>
            <div className={Styles.interaction_button}>
              <div className={Styles.Option}>
                { item.liked ?
                <Like className={Styles.heart} style={{color:"red"}}  onClick={()=>handleLike(i)}/>: 
                <LikeBorder className={Styles.heart_icon}  onClick={()=>handleLike(i)}/>}
                <Comment className={Styles.comment_icon} />
                <Send className={Styles.send_icon} />
              </div>
              <div className={Styles.bookmark_icon}>
                {user.username === item.name && <Edit className={Styles.editicon} onClick={()=>handleEdit(i)}/>}
              </div>
            </div>{
              item.liked2 ?
            <div className={Styles.liked_by}>
              {item.liked1 && <span><img src={item.liked1} className={Styles.liked_profile} /></span>}
              {item.liked2 && <span><img src={item.liked2} className={Styles.liked_profile} /></span>}
              {item.liked3 && <span><img src={item.liked3} className={Styles.liked_profile} /></span>}
              <p>
                {item.likes} Likes
              </p>
            </div>: <p>{item.likes} Likes</p>}
            <div className={Styles.caption}>
              <p>
                <b>{item.name}:</b> {item.caption} </p>
            </div>
          </div>
          {item.liked2 &&
          <div className={Styles.muted_text}>
            <small>view all 234 comments</small>
          </div>}
        </div>
      ))}
      <>
      {popup && (
          <div className={Styles.product_details}>
            <form className={Styles.container}>
              <h2>Edit Post</h2>
              {editPost.type === 'image' ? (
                <>
                  <img src={editPost.url} alt='Image' />
                  <input
                    type='text'
                    value={editPost.caption}
                    placeholder='Image Caption'
                    onChange={(e) => setEditPost({ ...editPost, caption: e.target.value })}
                  />
                  {captionError && <p className={Styles.error}>{captionError}</p>}
                </>
              ) : (
                <>
                  <video src={editPost.url} alt='Video' />
                  <input
                    type='text'
                    value={editPost.caption}
                    placeholder='Video Caption'
                    onChange={(e) => setEditPost({ ...editPost, caption: e.target.value })}
                  />
                </>
              )}
              <div className={Styles.btngrp}>
              <button onClick={(e)=>handleSave(e)}>Save</button>
              <button onClick={(e)=>handleDelete(e)}>Delete</button>
              </div>
              <Close
                onClick={() => {
                  setPopup(false);
                  setEditIndex(null);
                  setEditPost({});
                  setCaptionError('');
                }}
                className={Styles.close}
              />
            </form>
          </div>
        )}
      </>
    </div>
  );
}

export default PostCard;
