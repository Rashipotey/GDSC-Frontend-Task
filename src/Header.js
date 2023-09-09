
import React from 'react'
import logo from './media/Group 1961.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CenterHome from './CenterHome';
import Events from './Events'
import Team from './Team'
import { useState } from 'react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";


export default function Header() {
    const [isDark, setIsDark] = useState('dark');
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const gdsc={
        display: "inline",
        height: "21px",
        width: "179.38px",
        fontFamily:"Franklin Gothic Medium, Arial Narrow0, Arial, sans-serif",
        fontWeight:"lighter",
        fontSize: "21.88px",
        padding: "0px 0px 0px 40px",
        color:"rgba(134, 134, 134, 1)"
    }

    const navbtn={
        display: "inline",
        fontSize: "20px",
        padding:"0px 0px 0px 20px",
        width: "20%",
        fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        textDecoration: "none",
        color: "rgba(134, 134, 134, 1)"
    }

    
  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      
      <GlobalStyles/>
     <Router >
        <img style={{padding:"20px 0px 0px 44px"}} src={logo} alt="logo"></img>

        <h5 style={gdsc}>GDSC RCOEM</h5>
            <Routes>
                <Route path='/' element={<CenterHome/>}></Route>
                <Route path='/Events' element={<Events/>}></Route>
                <Route path='/Team' element={<Team/>}></Route>
            </Routes>
            <nav style={{paddingLeft:"950px", position:"relative", bottom:"6430px"}}>
            <Link style={navbtn} to="/">Home</Link>
            <Link style={navbtn} to="/Events">Events</Link>
            <Link style={navbtn} to="/Team">Team</Link>
            <Link style={navbtn} to="/">Alumni</Link>
            <Link style={navbtn} to="/">Contact</Link><span style={{padding:"10px"}} ></span>
            <DarkModeToggle
                mode={isDark}
                size="lg"
                onChange={(mode) => {
                    setIsDark(mode);
                    themeToggler();
                }}
            />
            </nav>
           
        </Router>
        </ThemeProvider>
    
    </>
  )
}
