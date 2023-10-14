import React from 'react'
import Login from './Login'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Loginpage() {
  return (
    <>
      <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}}/>
      <Login/>
      <Footer/>
    </>
  )
}
