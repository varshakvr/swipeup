import React , {useContext, useRef, useState} from 'react';
import Styles from "./Profile.module.css";
import { useNavigate } from 'react-router-dom';
import { datacontext } from '../../App';
import Profilepic from '@mui/icons-material/PersonPin';
import Coverpic from '@mui/icons-material/ContactEmergency';
import Sound from '@mui/icons-material/AudioFile';

function App() {
  const navigate = useNavigate();
  const {user,setUser,setUserData} = useContext(datacontext);
  const profile = useRef();
  const music = useRef();
  const cover = useRef();
  const [newData,setNewData] = useState({
    username:user.username,
    email:user.email,
    password:user.password,
    profilepic:user.profilepic,
    coverpic:user.coverpic,
    profilemusic:user.profilemusic
  })

  const profileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let prof = event.target.files[0];
      setNewData({ ...newData, profilepic :URL.createObjectURL(prof) });
    }
  };

  const coverChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let cov = event.target.files[0];
      setNewData({ ...newData, coverpic: URL.createObjectURL(cov) });
    }
  };

  const musicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let mu = event.target.files[0];
      setNewData({ ...newData, profilemusic: URL.createObjectURL(mu) });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(newData);
    setUserData(newData);
    navigate("/profile");
  };

  const handleCancle = (e) => {
    e.preventDefault();
    setNewData({
      username:user.username,
      email:user.email,
      password:user.password,
      profilepic:user.profilepic,
      coverpic:profile.coverpic,
      profilemusic:profile.profilemusic
    })
    navigate("/profile");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.profile_card}>
            <div className={Styles.profile_header} style={{backgroundImage:`url(${user.coverpic})`}}>
              <div className={Styles.main_profile}>
                  <div className={Styles.profile_image} style={{backgroundImage:`url(${user.profilepic})`}}></div>
                  <div className={Styles.profile_names}>
                      <h1 className={Styles.username}>{user.username}</h1>
                  </div>
              </div>
            </div>
      <div className={Styles.editProfile}>
          <div className={Styles.top}>
            <h1>Edit User Profile</h1>
          </div>
          <div className={Styles.bottom}>
            <div className={Styles.right}>
              <form>
                <div className={Styles.formInput}>
                  <label>Username</label>
                  <input type="text" value={newData.username}  onChange={(e)=>setNewData({...newData,"username":e.target.value})}/>
                </div>
                <div className={Styles.formInput}>
                  <label>Email</label>
                  <input type="email" value={newData.email}  onChange={(e)=>setNewData({...newData,"email":e.target.value})}/>
                </div>
                <div className={Styles.formInput}>
                  <label>Password</label>
                  <input type="text" value={newData.password} onChange={(e)=>setNewData({...newData,"password":e.target.value})}/>
                </div>
                <div className={Styles.formInput}>
                  <input type='file' accept='image/*' ref={profile} style={{display:"none"}} onChange={(e)=>profileChange(e)}/>
                  <div className={Styles.upload} onClick={()=>profile.current.click()}>Change Profile Picture<Profilepic /></div>
                </div>
                <div className={Styles.formInput}>
                  <input type='file' accept='image/*' ref={cover} style={{display:"none"}} onChange={(e)=>coverChange(e)}/>
                  <div className={Styles.upload} onClick={()=>cover.current.click()}>Change Cover Picture<Coverpic /></div>
                </div>
                <div className={Styles.formInput}>
                  <input type='file' ref={music} style={{display:"none"}} onChange={(e)=>musicChange(e)}/>
                  <div className={Styles.upload} onClick={()=>music.current.click()}>Change Profile Music<Sound /></div>
                </div>
                <div className={Styles.buttons}>
                <button className={Styles.Button} onClick={(e)=>handleSubmit(e)}>
                  Update Profile
                </button>
                <button className={Styles.Button} onClick={(e)=>handleCancle(e)}>
                  Cancel
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>   
    </div>                   
  );
}

export default App;
