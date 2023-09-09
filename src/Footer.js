import React from 'react'
import img1 from'./media/Group 1788.png'
import img2 from './media/Group 512932.png'
import img3 from './media/name.png'
import img4 from './media/Vector-3.png'
import img5 from'./media/grp/insta.png'
import img6 from './media/grp/linkedin.png'
import img7 from './media/grp/twitter.jpeg'

export default function Footer() {
    const backg={
        height:"441px",
        width:"100%",
        borderTopLeftRadius:"118px",
        borderTopRightRadius:"118px",
        backgroundImage: "linear-gradient(to right, #ccc , #2196F3"
    }
    const loc={
        padding:"0px 0px 130px 50px",
        height:"50px"
    }
    const nam={
        padding:"0px 0px 130px 20px",
        width:"400px"
    }
    const img={
        padding:"120px 0px 0px 100px",
        height:"130px",
        width:"380px"
    }
    const mail={
        position:"relative",
        right:"460px"
    }
    const email={
        textDecoration:"none",
        color:"white",
        fontSize:"20px",
        fontFamily:"Franklin Gothic Medium, Arial Narrow0, Arial, sans-serif",
        position:"relative",
        right:"430px",
        bottom:"10px"
    }
    const div={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"20px",
        position:"relative",
        bottom:"120px",
        left:"1130px"
    }
    const insta={
       
        height:"70px",
        width:"70px",
        borderRadius:"40px",
    }
    const link={
        height:"70px",
        width:"70px",
        borderRadius:"40px"
    }
    const twitter={
        width:"70px",
        height:"70px",
        borderRadius:"40px"
    }
  return (
    <>
        <div style={backg}>
            <img style={img} src={img1}></img>
            <img style={loc} src={img2}></img><img style={nam} src={img3}></img>
            <img style={mail} src={img4}></img><a style={email} href='dsc.rknec@gmail.com'>dsc.rknec@gmail.com</a>
            <p style={{color:"white", fontSize:"20px", padding:"0px 0px 0px 1190px", position:"relative", bottom:"150px"}}>Follow Us:</p>
            <div style={div}>
            <a href='http://bit.ly/gdsc-insta'><img style={insta} src={img5}></img></a><span style={{padding:"10px"}}></span><a href='https://www.linkedin.com/company/gdsc-rcoem/'><img style={link} src={img6}></img></a><span style={{padding:"10px"}}></span><a href='http://x.com/gdsc_rcoem?t=XXeSPki8SDXmLqlQKoylkg&s=09'><img style={twitter} src={img7}></img></a>
            </div>
            
        </div>
    </>
  )
}
