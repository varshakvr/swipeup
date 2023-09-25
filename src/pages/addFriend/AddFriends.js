import React, { useState } from 'react'
import styles from './AddFriends.module.css';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Facebook from '@mui/icons-material/Facebook';
import vinu from "../../assests/images/cat-kitty.gif";
import varsha from "../../assests/images/varsha.jpeg";
import vinishiya from "../../assests/images/vinishiya.jpeg";
import dhayal from "../../assests/images/dhayal.jpg";
import sai from  "../../assests/images/sai.jpeg";
import kishore from "../../assests/images/kishore.jpeg";
import hemanth from "../../assests/images/hemanth.jpg";
import kokila from "../../assests/images/kokila.jpg";
import bg1 from "../../assests/images/p7.jpg";
import bg2 from "../../assests/images/p15.jpg";
import bg3 from "../../assests/images/p6.jpg";
import bg4 from "../../assests/images/p14.jpg";
import bg5 from "../../assests/images/p13.jpg";
import bg6 from "../../assests/images/p16.png";
import bg7 from "../../assests/images/p3.jpg";

function AddFriends() {
    const cardData = [
        {
          id: 1,
          name: 'Vinishiya',
          username:'vinujo',
          surname: 'Rajamani',
          role: 'Frontend Developer',
          image: vinu,
          followers: "10k",
          following: 200,
          likes: "3k",
          profilepic: vinishiya
        },
        {
          id: 2,
          name: 'Varsha',
          surname:"micky",
          role: 'UX Designer',
          image: vinu,
          followers: "8k",
          following: 150,
          likes: "2.5k",
          profilepic:varsha
        },
        {
            id: 3,
            name: 'Kokila',
            surname:'Varadharajan',
            role: 'UX Designer',
            image: vinu,
            followers: "8k",
            following: 150,
            likes: "2.5k",
            profilepic: kokila
          },
          {
            id: 5,
            name: 'Sai srinivas',
            surname:"Balakrishnan",
            role: 'UX Designer',
            image: vinu,
            followers: "8k",
            following: 150,
            likes: "2.5k",
            profilepic: sai
          },
          {
            id: 6,
            name: 'Kishore',
            surname:"Ram",
            role: 'UX Designer',
            image: vinu,
            followers: "8k",
            following: 150,
            likes: "2.5k",
            profilepic: kishore
          },
          {
            id: 7,
            name: 'Dhayal',
            surname:"dhayal",
            role: 'UX Designer',
            image: vinu,
            followers: "8k",
            following: 150,
            likes: "2.5k",
            profilepic: dhayal
          },
          {
            id: 8,
            name: 'Hemanth',
            surname:"hemanth",
            role: 'UX Designer',
            image: vinu,
            followers: "8k",
            following: 150,
            likes: "2.5k",
            profilepic: hemanth
          },
        // Add more card data objects here for additional cards
      ];
      const [user,setOnuser]=useState([
        {
            id: 1,
            name: 'Vinishiya Rajamani',
            username: 'Vinujo',
            img:vinishiya,
            bgimg:bg1,
            friends:'20 mutual friends' 
        },
        {
            id: 2,
            name: 'Kokila Princes',
            username: 'Kokilavarsha',
            img: kokila,
            bgimg:bg3,
            friends:'10 mutual friends' 
        },
        {
            id: 4,
            name: 'Varsha Miki',
            username: 'Varsha',
            img: varsha,
            bgimg:bg2,
            friends:'12 mutual friends' 
        },
        {
            id: 5,
            name: 'Sai Srinivas',
            username: 'Saisai',
            img: sai,
            bgimg:bg6,
            friends:'5 mutual friends' 
        },
        {
            id: 6,
            name: 'Kishore Ram',
            username: 'Kishore',
            img: kishore,
            bgimg:bg4,
            friends:'6 mutual friends' 
        },
        {
            id: 7,
            name: 'Hemanathan ',
            username: 'Hemanth',
            img: hemanth,
            bgimg:bg7,
            friends:'4 mutual friends' 
        },
        {
            id: 8,
            name: 'Dhayal',
            username: 'Dhayal',
            img: dhayal,
            bgimg:bg5,
            friends:'2 mutual friends' 
        }
    
    ])
      
      function Card({ id, surname , name, role, image, followers, following, likes, profilepic }) {

        return (

          <div className={styles.cardflip} key={id}>
            <div className={styles.cardinner}>
              <div className={styles.front } style={{ backgroundImage: `url(${profilepic})` }}>
                <h2>{name}</h2>
                <p>{role}</p>
                <button>Hover me</button>
              </div>
              <div className={styles.back}>
                <img src={image} alt={name} />
                <h1>
                  {name} <span>{surname}</span>
                </h1>
                <p>
                  I'm a web developer currently working <span>@google</span> to make websites.
                </p>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h2>{followers}</h2>
                    <p>Followers</p>
                  </div>
                  <div className={styles.col}>
                    <h2>{following}</h2>
                    <p>Following</p>
                  </div>
                  <div className={styles.col}>
                    <h2>{likes}</h2>
                    <p>Likes</p>
                  </div>
                </div>
                <div className={styles.row}>
                  <button>Follow</button>
                  <div className={styles.logo}>
                    <WhatsApp />
                  </div>
                  <div className={styles.logo}>
                    <Facebook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
  return (
    <>
    <>
    <ul className={styles.friendlist}>
      <h2>Friend Request</h2>
      <div className={styles.friends}>
        {
            user.map((u)=>
                {
                    return(
                        <div className={styles.online}>
                           <div className={styles.bgimgs}>
                               <img src={u.bgimg}/>
                           </div>
                           <div className={styles.smallimg}>
                            <img src={u.img}/>
                           </div>
                           <div className={styles.content}>
                                 <p>{u.name}</p>
                                 <p className={styles.suggestion}>{u.friends}</p>
                                 <div className={styles.buttongrp}>
                                 <button>Accept</button>
                                 <button>decline</button>
                                 </div>
                            </div>

                        </div>
                        )
                }
                

            )
        
        }
         </div> 
    
    </ul>
  </>
         <div className={styles.containerflip}>
          <h2>Suggestions For You</h2>
            <div className={styles.cardGrid}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          role={card.role}
          image={card.image}
          followers={card.followers}
          following={card.following}
          likes={card.likes}
          profilepic={card.profilepic}
        />
      ))}
    </div>
    </div>
    
  

    
  </>

  )
}

export default AddFriends;