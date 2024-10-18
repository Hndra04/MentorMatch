import React, { useEffect } from 'react'
import Header from '../components/Header'
import ImageGallery from '../components/ImageGallery';
import Jumbotron from '../components/Jumbotron';
import Partners from '../components/Partners';
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginPage from './LoginPage'
import SignUp from './SignUp'
import AddActivity from './AddActivity'


const LandingPage = () => {
  useEffect(() => {
    document.title = "Lend-a-Hand";
  }, []);

  return (
    <>
      <Header/>

      <div className='raleway font-bold text-4xl flex justify-between px-12'>
        <div className='flex items-center'>
          <div>
            Together we can do more.
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div style={{color: "#EE6C4D"}}>Make an impact</div>
          <div>
            <img src="./assets/Icons/Point_Orange.png" alt="" />
          </div>
        </div>
      </div>

      <ImageGallery />

      <Jumbotron />

      <Partners />
    </>
  )
}

export default LandingPage