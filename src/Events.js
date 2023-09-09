import React from 'react'
import img1 from './media/codespells.jpeg'
import img2 from './media/webwizards.jpeg'
import img3 from './media/gdscwow.jpeg'
import img4 from './media/winterofcode.jpeg'
import img5 from './media/flutter.jpeg'
import img6 from './media/wreckitretro.jpeg'
import img7 from './media/images.png'


export default function Events() {
    const image={
        height:"300px",
        width:"300px",
        padding:"0px 0px 0px 60px",
        borderRadius:"10px",
    }
    const h1={
        padding:"20px 0px 0px 650px",
        fontSize:"40px",
       color:"black"
    }
    const div1={
        display:"inline-block",
        lineHeight:"100px"
    }
    const red={
        width: "150px",
        height: "5px",
        backgroundColor:"rgba(219, 68, 55, 1)",
        borderColor: "rgba(219, 68, 55, 1)",
        position: "relative",
        left: "20px"
    }
    const logo={
        position:"inline",
        bottom:"160px",
        height:"300px",
        width:'300px'
    }
    const para={
        padding:"0px 0px 0px 700px",
        fontSize:"30px",
        color:"black"
    }
  return (
    <>
        <h1 style={h1}>Past Events</h1>
        <hr style={red}></hr><img style={logo} src={img7}></img>
        
        <div style={div1}>
        <a href='https://www.instagram.com/p/CslypWCPSiu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img1}></img></a>
               
        <a href='https://www.instagram.com/p/CsDK0hIoex4/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img2}></img></a>
                   
        <a href='https://www.instagram.com/p/Cr2-MrXI5Ru/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img3}></img></a>
                   
        <a href='https://www.instagram.com/p/Cmy8K4aoNLI/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img4}></img></a>
                   
        <a href='https://www.instagram.com/p/Cn2K-bLPky0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img5}></img></a>
                   
        <a href='https://www.instagram.com/p/ClfsLCnrt-t/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='><img style={image} src={img6}></img></a>
        </div>
        <p style={para}>More Events Await You</p>
    </>
  )
}
