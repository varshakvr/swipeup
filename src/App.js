import EditProfile from "./pages/profile/EditProfile";
import PostPage from "./pages/post/PostPage";
import UserProfile from "./pages/profile/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddFriends from "./pages/addFriend/AddFriends";
import NavTop from "./pages/navbar/NavTop";
import Subscription from "./pages/subscription/Subscription";
import News from "./pages/news/News";
import Music from "./pages/music/Music";
import { createContext , useState, useEffect } from "react";
import {PostData} from "./assests/data/PostData";
import {UserData} from "./assests/data/UserData";
import {ReelsData} from "./assests/data/ReelsData";
import Sasiprofile from "./assests/images/sasiprofile.jpeg";
import Sasicover from "./assests/images/sasicover.jpeg";
import hoyyoda from "./assests/hoyoda.mp3";
import "./App.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import Login from "./pages/login/Login";
import Reels from "./pages/reels/Reels";
import Chat from "./pages/chat/Chat";
import Explore from "./pages/explore/Explore";
import Game from "./pages/game/Game";
import  Feed  from "@mui/icons-material/RssFeed";
import Chatt from '@mui/icons-material/Forum';
import  PlayCircleFilledOutlined  from "@mui/icons-material/PlayCircleFilledOutlined";
import Exploree from '@mui/icons-material/Explore';
import Musicc from '@mui/icons-material/LibraryMusic';
import Gamee from '@mui/icons-material/SportsEsports';
import WorkOutline from "@mui/icons-material/WorkOutline";
import ColorIcon from '@mui/icons-material/ColorLens';
import Newspaper from '@mui/icons-material/Newspaper';
import {Link} from "react-router-dom";
import { ChromePicker } from 'react-color';
import { Close } from '@mui/icons-material';

export const datacontext = createContext();

function App() {
  const [leftnavbar,setLeftNavBar] = useState(false);
  const [theme,setTheme] = useState("light")
  const [user,setUser] = useState({
        username:"Sasi",
        email:"sasi@gmail.com",
        password:"sasi123",
        profilepic:Sasiprofile,
        coverpic:Sasicover,
        profilemusic:hoyyoda
  })
  const [postData,setPostData] = useState(PostData)
  const [userData,setUserData] = useState(UserData)
  const [reelsData,setReelsData] = useState(ReelsData)

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const[close,setClose]=useState(false)
    const[color,setColor] = useState({"background":"#fff","text-primary":"000"});
    const view=()=>{
        setClose(true);
        setLeftNavBar(!leftnavbar);
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
    <div data-theme={theme} className="font">
    <datacontext.Provider value={{postData,setPostData,userData,setUserData,reelsData,setReelsData,user,setUser,switchTheme,leftnavbar,setLeftNavBar}}>
      
    <Router>
    { leftnavbar &&
    <div  className="hiddensidebar">
      <div className="hiddensidebarWrapper">
        <ul className="hiddensidebarList" data-aos='fade-right'>
        <Link to="/">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Feed className="hiddensidebarIcon"/>
            <span className="hiddensidebarListItemText">Feed</span>
          </li>
        </Link>
          <Link to="/chat">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Chatt className="hiddensidebarIcon" />
            <span className="hiddensidebarListItemText">Chat</span>
          </li>
          </Link>
          <Link to="/explore">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Exploree className="hiddensidebarIcon" />
            <span className="hiddensidebarListItemText">Explore</span>
          </li>
          </Link>
          <Link to="/reels">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <PlayCircleFilledOutlined className="hiddensidebarIcon" />
            <span className="hiddensidebarListItemText">Swipe</span>
          </li>
          </Link>
          <Link to="/music">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Musicc className="hiddensidebarIcon"/>
            <span className="hiddensidebarListItemText">Music</span>
          </li>
          </Link>
          <Link to="/game">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Gamee className="hiddensidebarIcon" />
            <span className="hiddensidebarListItemText">Game</span>
          </li>
          </Link>
          <Link to="/news">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <Newspaper className="hiddensidebarIcon" />
            <span className="hiddensidebarListItemText">News</span>
          </li>
          </Link>
          <Link to="/subscription">
          <li className="hiddensidebarListItem" onClick={()=>setLeftNavBar(!leftnavbar)}>
            <WorkOutline className="hiddensidebarIcon"/>
            <span className="hiddensidebarListItemText">Subscription</span>
          </li>
          </Link>
          <Link>
          <li className="hiddensidebarListItem" onClick={view}>
            <ColorIcon className="hiddensidebarIcon"/>
            <span className="hiddensidebarListItemText">Custom Theme</span>
          </li>
          </Link>
        </ul>
        </div>
        </div>}
        <div>
      {
            close &&
            <div className="hiddenproduct_details">
                <div className="hiddencontainer">
                  <div>
                    <h3>Choose Your Background Color !!</h3>
                    <ChromePicker  color={color.background} onChange={(e)=>{handleColorChange("background",e.hex);handleColorChange("text-secondary",e.hex)}} className="hiddenpicker"/>
                  </div>
                  <div>
                    <h3>Choose Your Primary Color !!</h3>
                    <ChromePicker color={color['text-primary']} onChange={(e)=>handleColorChange("text-primary",e.hex)} className="hiddenpicker"/>
                  </div>
                  <Close onClick={()=>setClose(false)} className="hiddenclose"/>
                </div>
            </div>} 
      </div>
      <Routes>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/" exact element={<><NavTop /><Home /></>}/>
        <Route path="/friends" exact element={<><NavTop /><AddFriends /></>}/>
        <Route path="/profile" exact element={<><NavTop /><UserProfile /></>}/>
        <Route path="/editprofile" exact element={<><NavTop /><EditProfile /></>}/>
        <Route path="/subscription" exact element={<><NavTop /><Subscription /></>}/>
        <Route path="/news" exact element={<><NavTop /><News /></>}/>
        <Route path="/music" exact element={<><NavTop /><Music /></>}/>
        <Route path="/reels" exact element={<><NavTop /><Reels /></>}/>
        <Route path="/chat" exact element={<><NavTop /><Chat /></>}/>
        <Route path="/explore" exact element={<><NavTop /><Explore /></>}/>
        <Route path="/game" exact element={<><NavTop /><Game /></>}/>
      </Routes>
      
    </Router>
    
    </datacontext.Provider>
    </div>
  );
}

export default App;
