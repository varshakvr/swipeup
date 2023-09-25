import React, { useState } from 'react';
import img1 from '../../assests/images/p9.png';
import img2 from '../../assests/images/p11.jpg';
import img3 from '../../assests/images/p7.jpg';
import img4 from '../../assests/images/p13.jpg';
import img5 from '../../assests/images/p12.png';
import img6 from '../../assests/images/p10.jpg';
import img7 from '../../assests/images/p2.jpg';
import img8 from '../../assests/images/p1.jpg';
import img9 from '../../assests/images/p5.jpg';
import img10 from '../../assests/images/p6.jpg';

import vid1 from '../../assests/images/v2.mp4';
import vid2 from '../../assests/images/v4.mp4';
import vid3 from '../../assests/images/v5.mp4';
import vid4 from '../../assests/images/v6.mp4';

import Styles  from './Explore.module.css';

function Explore() {
    const [multimediaDictionary] = useState([
        {
          type: 'photo',
          src: img1,
          username: 'Vinishiya',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img2,
          username: 'Kokila',
          followers: '956k Followers',
          following: '40k Following',
        },
        {
          type: 'video',
          src: vid1,
          username: 'Varsha',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img3,
          username: 'Sai Srinivas',
          followers: '405 Followers',
          following: '300 Following',
        },
        {
          type: 'video',
          src: vid2,
          username: 'Hemanth',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img4,
          username: 'Dhayal',
          followers: '506k Followers',
          following: '200k Following',
        },
        {
          type: 'photo',
          src: img5,
          username: 'Kishore',
          followers: '789 Followers',
          following: '500 Following',
        },
        {
          type: 'video',
          src: vid3,
          username: 'Vinishiaya',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img6,
          username: 'Kokila',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img7,
          username: 'Varsha',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'video',
          src: vid4,
          username: 'Sai Srinivas',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img8,
          username: 'Hemanth',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'video',
          src: vid2,
          username: 'Dhayal',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img9,
          username: 'Kishore',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'video',
          src: vid3,
          username: 'Varsha',
          followers: '856k Followers',
          following: '300k Following',
        },
        {
          type: 'photo',
          src: img10,
          username: 'Vinishiya',
          followers: '856k Followers',
          following: '300k Following',
        },
      ]);
  return (
    <div>
      <div className={Styles.multimediacontainer}>
        {multimediaDictionary.map((item, index) => (
          <div className={Styles.container} key={index}>
            {item.type === 'photo' && (
              <div className={Styles.multimediaitem}>
                <img className={Styles.hoverimg} src={item.src} alt={`photo${index}`} />
              </div>
            )}
            {item.type === 'video' && (
              <div className={Styles.multimediaitem}>
                <video className={Styles.hovervideo}  autoPlay loop muted>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className={Styles.glass}>
              <h3>{item.username}</h3>
              <ul>
                <li>{item.followers}</li>
                <li>{item.following}</li>
              </ul>
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
    