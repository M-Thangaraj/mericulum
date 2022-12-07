import React from 'react'
import NavBar from './NavBar';
import hero from '../assets/images/hero.jpg';
import hero1 from '../assets/images/hero.png';
import google_app from '../assets/images/google_app.png';
import google_app1 from '../assets/images/google_app1.png';
import Footer from './Footer';
import recycle from '../assets/images/recycle.png';
import blockchain from '../assets/images/blockchain.png';
import marketplace from '../assets/images/marketplace.png';
import collect from '../assets/images/collect.png';
import scan from '../assets/images/scan.png';
import recycles from '../assets/images/recycles.png';
import getpay from '../assets/images/get_pay.png';
import what_mericulum from '../assets/images/what-mericulum.png';


export default function Home() {
    return (
        <>
        <div className='home mb-0' >
          <NavBar/>
          <section id="hero">
            <div
              className="text-white mb-4 container flex flex-col-reverse items-center px-6 mt-10 mx-auto  space-y-0 md:space-y-0 md:flex-row"
            >
              <div className="flex flex-col md:w-1/2">
                <h1
                  className="md:max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
                >
                  WE TURN
                </h1>
                <h1
                  className="max-w-md text-4xl font-bold text-center md:text-8xl md:text-left"
                >
                WASTE TO WORTH
                </h1>
                <p className="max-w-sm text-center mt-5 md:text-left md:text-3xl tracking-wider font-mono font-thin">
                BE A PART OF MAKING THIS WORLD BETTER TODAY.
                </p>
              </div>
              <div className=" pb-16 md:w-1/2">
                <img src={hero} alt="hero" />
              </div>
            </div>
          </section>

          <section id="body ">
            <div className="flex flex-col">
              <h1  className="hero-head   md:mx-10 text-4xl font-bold text-center md:text-5xl md:text-left">
                How Does Mericulum Works?
              </h1>
            </div>
            <div className="text-white container flex flew-row px-3 py-4 sm:px-16  lg:py-8">
              <div className="">
                <img  className='mx-auto lg:w-7/12 lg:mx-20 ' src={hero1} alt="hero" />
              </div>
              <div className='my-auto lg:pt-10'>
                <div className='px-6 sm:px-10'>
                  <h1 className='hero-head  md:font-medium md:text-3xl lg:text-4xl '>
                      Just Drop
                  </h1>
                  <p className='text-[10px] sm:text-lg '>With more than 1,000 drop off points. You can segregate the plastic  and drop at nearest points. Find your <span> nearest drop off point</span></p>
                    {/* <p className='text-white '>With more than 1,000 drop off points. You can segregate the plastic  and drop at nearest points. Find your <span> nearest drop off point</span></p> */}
                 </div>
                <div className=' lg:mt-6 px-6 sm:px-10' >
                    <h1 className='hero-head md:font-medium md:text-3xl  lg:text-4xl '>
                      Scan
                    </h1 >
                    <p className='text-[10px] sm:text-lg'>Scan the QR code at the drop off point. Select challenge to join and insert the quantity of your plastic.</p>
                 </div>

                 <div className='lg:mt-6 px-6 sm:px-10' >
                    <h1 className='hero-head md:font-medium text-base  md:text-3xl  lg:text-4xl '>
                    And Go
                    </h1 >
                    <p className='text-[10px] sm:text-lg'>Token Transfer to your account and your plastics were sent to recycled. .</p>
                 </div>
                 <div className=' px-6 pt-2'>
                    <img className='lg:hidden h-1/4 w-1/6 md:mx-8' src={google_app} alt='Google Play Store'/>    
                    {/* <img className='hidden lg:block h-1/4 w-1/6' src={google_app} alt='Google Play Store'/>     */}
                    <img className='hidden  pt-3 lg:block mx-8 h-1/4 w-2/6' src={google_app1} alt='Google Play Store'/>
                 </div>
                 <div className='px-4 md:mx-8 md:pt-4 lg:pt-7 lg:mx-20'  >
                    <a href="/" className='contactus text-[5px]  px-3 py-1 md:px-4 md:py-2 lg:py-3 lg:px-16 text-black rounded-full md:text-[12px] lg:text-[15px]  shadow '>
                    <span className='font-black '>DOWNLOAD</span>
                    </a>
                  </div>
                 
              </div>
            </div>
          </section>
      
      <div className=' justify-center'>
        
        <div className='mx-auto'>
          <div className=' grid grid-cols-4 mt-4' >
            <div>
              <img className='' alt='collect' src={collect}></img>
            </div>
            <div>
            <img className='' alt='scan' src={scan}></img>
            </div>
            <div>
            <img className='mt-2' alt='recycle' src={recycles}></img>
            </div>
            <div>
            <img className='mt-2' alt='getpay' src={getpay}></img>
            </div>
          </div>
          </div>
            
      <div>
        <div>
          <img className='mt-2 mx-auto lg:hidden' alt='what is mericulum' src={what_mericulum}></img>
        </div>

      </div>
      
      </div>
        <div className='flex flex-col mt-5 mx-auto '>
          <div className='px-2 md:w-4/5'>
            <h1 className='hero-head text-xl md:text-4xl lg:text-5xl font-bold md:w-1/2'>
            Why Mericulum?
            </h1>
            <p className='text-white text-s md:text-2xl px-2 lg:text-xl lg:w-3/4 mt-5 lg:mx-4 tracking-wide'>
            A solution data platform for plastic recycling, blockchain protocol, and recycling project marketplace
            </p>
            <p className='text-white px-2 text-s md:text-2xl lg:text-xl lg:w-3/4 lg:mx-4 mt-2 tracking-wide'>
            Design for recycling process, find the added-value for recycled process, Collaborate with the recycling manufacturers
            </p>
          </div>

          <div className='section_2 flex flex-row py-3 mb-4 mt-10'>
            <div className='mx-auto lg:mx-20 px-2 flex items-center justify-between'>
              <img className='rounded-lg h-64 w-72 md:h-96 md:w-96 lg:h-80 lg:w-96' src={recycle} alt='recycle'/>
            </div>
            <div className='w-2/3 px-3'>
              <h1 className='hero-head text-lg  md:text-4xl lg:text-5xl mx-auto md:mx-20 mt-2 md:mt-10 font-bold '>
              Data platform
              </h1>
              <h1 className='text-white text-base md:text-3xl lg:text-4xl mt-2 md:mt-4 mx-auto md:mx-20 font-bold'>
              Recycling company profiles
              </h1>
              <p className='text-white text-sm md:text-lg lg:text-lg mt-2 md:mt-7 mx-auto md:mx-20 tracking-wide '>
              Data platform with mappling and filter to sort out the recycling drop-off points, reclycling plants, type of plastics.
              </p>
              <div className='flex flex-row justify-center md:justify-start mt-2 md:mt-7 mx-auto md:mx-40 space-x-10'>
                <a href="/" className='md:tracking-widest md:block bg-white py-1 px-1 md:px-10  lg:px-10 lg:py-4 text-blue rounded-full text-xs  md:text-base lg:text-lg font-medium shadow'>
                  See full solution
                </a>
              </div>
            </div>
          </div>
          <h1 className='hero-head text-xl md:text-5xl mx-3 md:mx-3 lg:mx-5  mt-4 font-bold '>
              Blockchain protocol
              </h1>
          <div className='section_2 flex flex-row md:py-5 mt-3 md:mt-10'>
            <div className='w-2/3 px-3 md:mt-10  md:px-6 '>
              <h1 className='text-white text-base md:text-3xl lg:text-4xl mt-2 md:mt-4 mx-auto lg:mx-20 font-bold'>
              Tokenization the traceability of recycling process
              </h1>
              <p className='text-white text-sm md:text-lg lg:text-lg mt-2 md:mt-7 mx-auto lg:mx-20 tracking-wide '>
              Recycling process as plastic collection, delivery to dropped off points, delivery to reclycling factories as ending points are tokenized
              </p>
            </div>
            <div className='mx-auto lg:mx-20 px-2 flex items-center justify-between'>
            <img className='rounded-lg h-64 w-72 md:h-96 md:w-96 lg:h-80  lg:w-96' src={blockchain} alt='manufacturers'/>
            </div>
          </div>

          <div className='section_2 flex flex-row py-5  mt-10'>
          <div className='mx-auto lg:mx-20 px-2 flex items-center justify-between'>
            <img className='rounded-lg h-64 w-72 md:h-96 md:w-96 lg:h-80 lg:w-96'  src={marketplace} alt='brand'/>
            </div>
            <div className='w-2/3 px-3 md:px-5 md:pt-20'>
              <h1 className='text-white text-base md:text-3xl lg:text-4xl mt-10 md:mt-9 mx-auto lg:mx-20 font-bold'>
              Marketplace
              </h1>
              <p className='text-white text-sm md:text-lg lg:text-lg mt-2 md:mt-7 mx-auto lg:mx-20 tracking-wide '>
              Recycled project set up on marketplace for the token purchasing. The investors, donors, and individuals who cares can take action
              </p>
            </div>
            
          </div>

        </div>
        <Footer/>
        </div>
      </>
    )
  }
