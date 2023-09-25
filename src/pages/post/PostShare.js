import React, { useState, useRef, useContext, useEffect } from 'react';
import Styles from './PostPage.module.css';
import Close from '@mui/icons-material/CloseOutlined';
import { datacontext } from '../../App';

function PostShare() {
  const [image, setImage] = useState({ url: '', caption: '' });
  const [videofile, setVideo] = useState({ url: '', caption: '' });
  const [post, setPost] = useState(false);
  const [close, setClose] = useState(false);
  const [imageCaptionError, setImageCaptionError] = useState('');
  const [videoCaptionError, setVideoCaptionError] = useState('');
  const imageRef = useRef();
  const videoRef = useRef();
  const { postData, setPostData, user } = useContext(datacontext);

  const videoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo({ ...videofile, url: URL.createObjectURL(vid) });
      setClose(true);
    }
  };

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({ ...image, url: URL.createObjectURL(img) });
      setClose(true);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (image.url) {
      if (image.caption.trim() === '') {
        setImageCaptionError('Image caption is required');
      } else {
        setImageCaptionError('');
        setPost(true);
      }
    }

    if (videofile.url) {
      if (videofile.caption.trim() === '') {
        setVideoCaptionError('Video caption is required');
      } else {
        setVideoCaptionError('');
        setPost(true);
      }
    }
  };

  useEffect(() => {
    if (post) {
      if (image.url) {
        const data = {
          type: 'image',
          profilepic: user.profilepic,
          name: user.username,
          url: image.url,
          caption: image.caption,
          liked1: '',
          liked2: '',
          liked3: '',
          likes: "0",
          liked:false,
        };
        setPostData([data,...postData]);
        setImage({ url: '', caption: '' });
        setClose(false);
        setPost(false);
      }

      if (videofile.url) {
        const data = {
          type: 'video',
          profilepic: user.profilepic,
          name: user.username,
          url: videofile.url,
          caption: videofile.caption,
          liked1: '',
          liked2: '',
          liked3: '',
          likes: "0",
          liked: false,
        };
        
        setPostData([data,...postData]);
        setVideo({ url: '', caption: '' });
        setClose(false);
        setPost(false);
      }
    }
  }, [post, postData]);

  return (
    <div className={Styles.dummy}>
    <div className={Styles.PostShare}>
      <img src={user.profilepic} alt='Profile' />
      <div className={Styles.controls}>
        <div onClick={() => imageRef.current.click()}>
          <span>Upload Photo</span>
        </div>
        <div onClick={() => videoRef.current.click()}>
          <span>Upload Video</span>
        </div>
        <div style={{ display: 'none' }}>
          <input type='file' accept='image/*' name='myImage' ref={imageRef} onChange={imageChange} />
        </div>
        <div style={{ display: 'none' }}>
          <input type='file' accept='video/*' name='myVideo' ref={videoRef} onChange={videoChange} />
        </div>
      </div>
      <>
        {close && (
          <div className={Styles.product_details}>
            <form className={Styles.container}>
              <h2>Post Preview</h2>
              {image.url ? (
                <>
                  <img src={image.url} alt='Image' />
                  <input
                    type='text'
                    value={image.caption}
                    placeholder='Image Caption'
                    onChange={(e) => setImage({ ...image, caption: e.target.value })}
                  />
                  {imageCaptionError && <p className={Styles.error}>{imageCaptionError}</p>}
                </>
              ) : (
                <>
                  <video src={videofile.url} alt='Video' />
                  <input
                    type='text'
                    value={videofile.caption}
                    placeholder='Video Caption'
                    onChange={(e) => setVideo({ ...videofile, caption: e.target.value })}
                  />
                  {videoCaptionError && <p className={Styles.error}>{videoCaptionError}</p>}
                </>
              )}
              <button onClick={(e)=>handlePost(e)}>Post</button>
              <Close
                onClick={() => {
                  setClose(false);
                  setImage({ url: '', caption: '' });
                  setVideo({ url: '', caption: '' });
                  setImageCaptionError('');
                  setVideoCaptionError('');
                }}
                className={Styles.close}
              />
            </form>
          </div>
        )}
      </>
    </div>
    </div>
  );
}

export default PostShare;
