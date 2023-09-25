import React from 'react'
import HdIcon from '@mui/icons-material/Hd';
import FourKIcon from '@mui/icons-material/FourK';
import EightKIcon from '@mui/icons-material/EightK';
import Styles from "./Subscription.module.css";
import NavLeft from '../navbar/NavLeft';

function Subscription() {
  return (
    <div className={Styles.container}>
        <div className={Styles.plans}>
            <h1>BASIC</h1>
            <div className={Styles.price}>
                <h2>Free</h2>
            </div>
            <div className={Styles.access}>
                <h4><HdIcon /></h4>
                <h4>Ad-supported</h4>
                <h4>Standard Messaging</h4>
                <h4>Limited Feed Customization</h4>
            </div>
            <div className={Styles.b}>
                <button>SELECT</button>
            </div>
        </div>

        <div className={Styles.plans}>
            <h1>PREMIUM PRO</h1>
            
            <div className={Styles.price}>
                <h2>RS 1000/year</h2>
            </div>
            <div className={Styles.access}>
                <h4><EightKIcon /></h4>
                <h4>Priority Support</h4>
                <h4>Early Access</h4>
                <h4>Verified Badge</h4>
                <h4>Exclusive Communities</h4>
            </div>
            <div className={Styles.b}>
                <button>SELECT</button>
            </div>
        </div>


        <div className={Styles.plans}>
            <h1>PREMIUM</h1>
            <div className={Styles.price}>
                <h2>RS 500/year</h2>
            </div>
            <div className={Styles.access}>
                <h4><FourKIcon /></h4>
                <h4>Ad-Free Experience</h4>
                <h4>Enhanced Messaging</h4>
                <h4>Exclusive Content</h4>
            </div>
            <div className={Styles.b}>
                <button>SELECT</button>
            </div>
        </div>
    </div>   
  )
}

export default Subscription