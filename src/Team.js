import React from 'react'
import img1 from './media/teammem.jpeg'
import p1 from './media/p1.jpeg'
import p2 from './media/p2.jpeg'
import p3 from './media/p3.jpeg'
import p4 from './media/p4.jpeg'
import p5 from './media/p5.jpeg'
import p6 from './media/p6.jpeg'
import p7 from './media/p7.jpeg'
import p8 from './media/p8.jpeg'
import p9 from './media/p9.jpeg'


export default function Team() {
    const h1={
        padding:"20px 0px 0px 400px",
        fontSize:"40px",
        color:"black"
    }
    const image={
        height:"300px",
        width:"400px",
        position:"relative",
        left:"550px"
    }
    const p={
        padding:"20px 0px 0px 500px",
        fontSize:"40px",
        color:"black"
    }
    const yellow={
        width: "250px",
        height: "5px",
        backgroundColor:"rgba(15, 157, 86, 1)",
        borderColor: "rgba(15, 157, 86, 1)",
        position: "relative",
        left: "10px"
    }
    
    const line={
        backgroundColor:"red",
        borderColor:"red",
        width:"700px",
        borderRadius:"5px",
        height:"5px"
    }
    const person={
        height:"350px",
        width:"400px",
        position:"relative",
        left:"550px",
        borderRadius:"250px",
        borderTopColor:"rgba(219, 68, 55, 1)",
        borderLeftColor:"rgba(15, 157, 86, 1)",
        borderBottomColor:"#2196F3",
        borderRightColor:"yellow",
        borderStyle:"solid",
        borderWidth:"10px"
    }
    
  return (
    <>
        <h1 style={h1}>Meet Our Amazing Team Members</h1>
        <hr style={yellow}></hr>
        <img style={image} src={img1}></img>

        <br></br><br></br>
       
       <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", lineHeight:"60px", }}>
                    <img style={person} src={p1} alt="person-image"></img><br></br>
                    <img style={person} src={p2} alt="person-image "></img><br></br>
                    <img style={person} src={p3} alt="person-image "></img><br></br>
                    <img style={person} src={p4} alt="person-image "></img><br></br>
                    <img style={person} src={p5} alt="person-image "></img><br></br>
                    <img style={person} src={p6} alt="person-image "></img><br></br>
                    <img style={person} src={p7} alt="person-image "></img><br></br>
                    <img style={person} src={p8} alt="person-image "></img><br></br>
                    <img style={person} src={p9} alt="person-image "></img><br></br>
            </div>
       
        <hr style={line}></hr>
        <p style={p}> What Are You Waiting For?</p>
    </>
  )
}
