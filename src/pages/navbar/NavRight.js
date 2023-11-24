import React,{useState} from 'react'
import Styles from "./Nav.module.css";
import varsha from '../../assests/images/varsha.jpeg';
import koki from '../../assests/images/kokila.jpg';
import vinu from '../../assests/images/vinishiya.jpeg';
import sai from "../../assests/images/sai.jpeg";
import kishore from "../../assests/images/kishore.jpeg";


function NavRight(){
    const [trenddata, setTrend]=useState([
        {
            name: "Cricket",
            shares: 98
        },
        {
            name: "Climate",
            shares: 90
        },
        {
            name: "Election",
            shares: 85
        },
        {
            name: "Movies",
            shares: 80
        },
        {
            name: "Virus",
            shares: 77
        }
    ])

    const [user,setUser]=useState([
        {
            id: 1,
            name: 'Sophia',
            username: 'Sophia Davis',
            img:vinu 
        },
        {
            id: 2,
            name: 'Emily',
            username: 'Emily Thompson',
            img: koki
        },
        {
            id: 3,
            name: 'Lily',
            username: 'Lily Johnson',
            img: varsha
        },
        {
            id: 4,
            name: 'Benjamin',
            username: 'Benjamin Smith',
            img: kishore
        },{
            id: 5,
            name: 'Oliver',
            username: 'Oliver Williams',
            img: sai
        },
    ])
    return (
        <div className={Styles.RightSide}>
            <div className={Styles.Trendcard} data-aos="fade-left">
                <h3>Trends for you</h3>
                {
                    trenddata.map((trend)=>{
                        return(
                            <div className={Styles.trend}>
                                <span>#{trend.name}</span>
                                <span>{trend.shares}k shares</span>
                            </div>
                        )
                    })
                }
            </div>
            <div data-aos="fade-left" className={Styles.onlinediv}>
                <span className={Styles.Onlinefriend}>Online Friends</span>
                <ul className={Styles.friendlist}>
                    {user.map((u)=>{
                        return(
                            <div className={Styles.online}>
                                <li className={Styles.Friend}>
                                    <div className={Styles.profileimgcontainer}>
                                        <img className={Styles.profileimg} src={u.img}/>
                                        <span className={Styles.Friendonline}></span>
                                    </div>
                                    <span className={Styles.Username}>{u.name}</span>
                                </li>
                            </div>)})}
                </ul>
            </div>
        </div>
    )
}

export default NavRight