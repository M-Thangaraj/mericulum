import React from 'react'
import logo from '../assets/images/logo2.png'
import barcode from '../assets/images/barcode.png'

// import React, { react, useEffect, useState } from "react";

export default function NavBar() {
    // const [navbar, setNavbar] = useState(false);
    
  return (
    <> 
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-wrap md:p-5  md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                <img className='h-10 w-10 md:h-16 md:w-24' alt='mericulum logo' src={logo}></img>
            </a>
            <nav class="mx-auto md:ml-auto md:mr-auto flex md:flex-wrap items-center  justify-between md:font-medium text-[10px] md:text-lg">
                <a className='mr-1  md:mr-5 lg:mr-14 text-white hover:text-indigo-200' href="/">HOME</a>
                <a className='mr-1 md:mr-5 lg:mr-14 text-white hover:text-indigo-200' href="/">ABOUT US</a>
                <a className='mr-1 md:mr-5 lg:mr-14 text-white hover:text-indigo-200' href="/" >TOKENOMICS</a>
                <a className='mr-1 md:mr-5 lg:mr-14 text-white hover:text-indigo-200' href="/">MARKETPLACE</a>
                <a className='text-white hover:text-indigo-200' href='https://docs.google.com/presentation/d/e/2PACX-1vQb2nH1Fozon2eZCtNcx-_9GPDph5OlT342xOPPr72gUi_pitu1byGfYADGsp7S1w/pub?start=true&loop=true&delayms=3000&slide=id.g142e6112e21_1_0' target="_blank" rel="noreferrer"> PITCH DECK</a>
            </nav>
            <a className='' href='https://docs.google.com/presentation/d/e/2PACX-1vQb2nH1Fozon2eZCtNcx-_9GPDph5OlT342xOPPr72gUi_pitu1byGfYADGsp7S1w/pub?start=true&loop=true&delayms=3000&slide=id.g142ca616aef_0_32' target="_blank" rel="noreferrer"> <img className='h-10 w-10 md:h-14 md:w-16' alt='barcode' src={barcode}>
                
                </img></a>
        </div>
    </header>
    
    </>
  )
}
