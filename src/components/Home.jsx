import React from 'react'
import { Carousel } from "flowbite-react";
import hero1 from '../assets/hero1.png'

const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel slide={300} className='w-full mx-auto'>
            <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                    <img src={hero1} alt=''/>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                        Lessons and insights <span className='text-brandPrimary leading-sung'>from 8 years</span></h1>
                    <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                    <button className='btn-primary'>
                        Register
                    </button>
                </div>
            </div>
            <div className='my-28 md:my-8 py-12 flex flex-col 
            md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                    <img src={hero1} alt=''/>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                        Learn Design and Illustration<span className='text-brandPrimary leading-sung'> in 4 months</span></h1>
                    <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                    <button className='btn-primary'>
                        Register
                    </button>
                </div>
            </div>
            <div className='my-28 md:my-8 py-12 flex flex-col 
            md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                    <img src={hero1} alt=''/>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                     Grow Business Fast <span className='text-brandPrimary leading-sung'>for free of cost</span></h1>
                    <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                    <button className='btn-primary'>
                        Register
                    </button>
                </div>
            </div>
        </Carousel>
    </div>
    </div>
  )
}

export default Home
