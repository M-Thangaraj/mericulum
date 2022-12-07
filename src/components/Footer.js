import React from 'react'
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import mail from '../assets/images/gmail.png';
import copyright from '../assets/images/copyright.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
export default function Footer() {
  return (
    <>


     <div className='home md:mt-10 mx-auto'>
    <div className='text-white pt-10 flex flex-row mx-auto md:px-10 tracking-wide'>
        <div className=' w-1/3'>
            <h1 className='text-sm md:text-xl font-black'>
            About us
            </h1>
            <div className='text-xs md:text-base flex flex-col md:mt-6 space-y-2 md:space-y-3'>
                <a className='' href="/">Careers</a>
                <a className='' href="/" >Partnership Program</a>
                
            </div>

        </div>
        <div className='w-1/3'>
            <h1 className='text-sm font-black md:text-xl '>
            Solutions
            </h1>
            <div className='text-xs md:text-base flex flex-col md:mt-6 space-y-2 md:space-y-3'>
                <a className='' href="/">Data Platform</a>
                <a className='' href="/">Marketplace</a>
                <a className='' href="/" >Mobile App</a>
            </div>

        </div>
        <div className=''>
            <h1 className='text-sm font-black md:text-xl '>
            Knowledge hub
            </h1>
            <div className='text-xs md:text-base flex flex-col md:mt-6 space-y-2 md:space-y-3'>
                <a className='' href="/">Community</a>
                <a className='' href="https://medium.com/@mericulum" target="_blank" rel="noreferrer">Blog</a>
                <a className='' href="/" >FAQ</a>
                <a className='' href="/" >Privacy Policies</a>
                <a className='' href="/" >Terms & Conditions</a>
            </div>
        </div>
    </div> 

    <div className=' px-8 mt-10 flex flex-col mx-auto space-y-4'>
        <div className='flex flex-row space-x-4'>
            <a href='https://www.linkedin.com/company/mericulum/' target="_blank" rel="noreferrer">
            <img className='h-5 w-5' alt ='linkedin logo' src={linkedin} ></img>
            </a>
            <a href='/' target="_blank">
            <img className='h-5 w-5' alt ='twitter logo' src={twitter} ></img>
            </a>
            <a href='/' target="_blank">
            <img className='h-5 w-5' alt ='mail logo' src={mail} ></img>
            </a>
            <a href='https://www.instagram.com/mericulum_plastic/' target="_blank" rel="noreferrer">
            <img className='h-5 w-6' alt ='instagram logo' src={instagram} ></img>
            </a>
            <a href='/' target="_blank">
            <img className='h-5 w-6' alt ='facebook logo' src={facebook} ></img>
            </a>
        </div>
        <div className='text-slate-800 pb-10 flex flex-row space-x-1 tracking-wide'>
            <img className='h-4 w-4' alt ='copyright logo' src={copyright} ></img>
            <h1 className='text-xs text-white'>
                Copyright 2022 Mericulum. All rights reserved.
            </h1>
        </div>

    </div>
    </div>
    </>
  )
}
