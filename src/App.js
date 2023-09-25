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


export const datacontext = createContext();

function App() {

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

  return (
    <div data-theme={theme} className="font">
    <datacontext.Provider value={{postData,setPostData,userData,setUserData,reelsData,setReelsData,user,setUser,switchTheme}}>
      
    <Router>
      
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
