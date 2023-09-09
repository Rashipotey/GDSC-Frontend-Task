import React from 'react'
import img30 from './media/Group 512754.png'
import img31 from './media/Vector 57.png'
import img32 from './media/Asset 1 1.png'
import img33 from './media/Vector.png'
import img34 from './media/Vector-1.png'
import img35 from './media/Vector-2.png'
import style from './CenterHome.module.css'
import img7 from './media/amico.png'
import img8 from './media/Frame.png'
import img9 from './media/Group.png'
import img10 from './media/Group 512951.png'
import img11 from './media/Group 512902.png'
import img12 from './media/Group 512930.png'
import img13 from './media/Group 512931.png'
import img14 from './media/Group 512929.png'
import img15 from './media/Group 512945.png'
import img16 from './media/Group 512946.png'
import img17 from './media/Group 512947.png'
import img18 from './media/Group 512948.png'
import img19 from './media/Group 512949.png'
import { useState } from 'react'

export default function CenterHome() {
    const [isHovering,setIsHovering]=useState(false);
    const mainHeading={
        paddingLeft: "10px",
        fontSize: "90px",
        fontFamily:"Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
        fontWeight:"bolder",
        background:"linear-gradient(to right, rgb(212, 4, 4),rgba(66, 133, 244, 1),rgba(251, 188, 4, 1),rgba(15, 157, 88, 1))",
        webkitTextFillColor:"transparent",
        webkitBackgroundClip: "text"
    };
    
    const head2={
        paddingLeft:"550px" ,
        fontFamily:"Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
        color: "rgba(100, 100, 100, 1)",
        fontSize:"30px"
    };
    
    const plane={
        paddingLeft:"1050px "
    };
    const dottedLine={
        position:"absolute",
        bottom: "410px",
        paddingLeft:"590px"
    };
    
    const para={
        fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        padding: "5px 0px 0px 102px",
        fontSize: "35px",
        justifyContent: "center",
        color: "rgba(95, 95, 95, 1)"  
    };
    const joinBtn={
        backgroundImage: isHovering?"linear-gradient(to right,#2196F3,white )":"linear-gradient(to right,white,#2196F3)",
        borderColor:" #2196F3",
        height: "44px",
        width: "70px",
        padding: "10px",
        fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
        position:" relative",
        left: "717px" 
    };
    const hover=()=>{
        setIsHovering(true);
    }
    const stopHover=()=>{
        setIsHovering(false);
    }


  return (
   <>
    <div style={{padding:" 37px 0px 0px 107px"}}>

        <img style={plane} src={img30} alt=""/>
        <h1 style={mainHeading}>Google Developer Student Club</h1> <img style={dottedLine} class="dotted-line" src={img31} alt=""></img>
        <h2 style={head2}>RCOEM Chapter</h2>

    </div>

    < img style={{padding:"10px 0px 0px 284px"}} src={img32} alt=""/>
    <div>
        <p style={para}>Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.</p>
    </div>
    <button style={joinBtn} onMouseEnter={hover} onMouseLeave={stopHover}><a style={{textDecoration:"none", color:"black" }} href='https://docs.google.com/document/u/0/d/1vrv1FcdtEkxk2adlwrmG5CW4aeBc6NEALFGPkhfIyZ0/mobilebasic'>JOIN US</a></button>
    <div style={{padding:"50px 0px 0px 720px"}}>
        <img src={img33} alt=""/><br/><img src={img34} alt=""/><br/><img src={img35} alt=""/>
    </div>
    <p className={style.knowUs}>Get To Know Us</p>
    <br/>
    <p className={style.mission}>Our Mission</p>
    <hr className={style.blue}></hr>
    <div>
        <img className={style.teamWork} src={img7} alt=""/>
        <p className={style.ourMission}>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
    </div>

    <p className={style.perspective}>Our Perspective</p>
    <hr className={style.green}></hr>
    <div>
        <p className={style.wrapTextLeft}>
        We're a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.
        </p>
        <img className={style.wrapImageRight} src={img8} alt=""/>
    </div>

    <p className={style.keepGoing}>What Keeps Us Going?</p>
    <hr className={style.red}></hr>
    <div>
        <img src={img9} alt=""/>
        <p className={style.wrapTextRight}>
        Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
        The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
        </p>
    </div>
    <div className={style.circ}>
        <img className={style.circ1} src={img10} alt=""/>
        <img className={style.circ1} src={img10} alt=""/>
        <img className={style.circ1} src={img10} alt=""/>
        <img className={style.circ1} src={img10} alt=""/>
    </div>
    <div className={style.span}>
        <span className={style.caption}>Years</span>
        <span className={style.caption}>Events</span>
        <span className={style.caption}>Community <br/>Members</span>
        <span className={style.caption}>Attendees</span>
    </div>


    <img className={style.overlay} src={img11} alt=""/>
    <div className={style.ele}>
        <hr className={style.redLeft}/><span className={style.tech}>Technologies</span><hr className={style.redRight}/>
    </div>
    <p className={style.sub}>Domains That Excite Us to Collaborate and Teach!</p>
    <div className={style.ele}>
        <img src={img12} alt=""/>
        <img src={img13} alt=""/>
        <img src={img14} alt=""/>
    </div>
    <p className={style.faq}>FAQ</p>
    <div className={style.queAns}>
        <img src={img15} alt=""/>
        <img src={img16} alt=""/>
        <img src={img17} alt=""/>
        <img src={img18} alt=""/>
        <img src={img19} alt=""/>
    </div>
</>
  )
};
