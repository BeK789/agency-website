import React from 'react'
import pana from '../assets/pana.png'
import image9 from '../assets/image9.png'
import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'
import logo6 from '../assets/logos/logo6.png'

const Products = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={pana} alt=''/>
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
            How to design your site footer like we did
            </h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
             Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
             Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className='btn-primary'>Learn More</button>
          </div>
        </div>
      </div>


      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonials'>
    <div className='flex flex-row justify-between items-center gap-8'>
        <div className='flex flex-row justify-between items-center gap-8 w-full'>
            <div className='w-1/3'>
                <img src={image9} alt=''/>
            </div>

            <div className='w-2/3'>
                <p className='text-sm text-neutralGrey mb-8 leading-7'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
                 Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
                 nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                  Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                 Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h5 className='text-brandPrimary text-xl font-semibold mb-2'>
                    Tim Smith
                </h5>
                <p className='text-base text-neutralGrey mb-8'>
                    British Dragon Boat Racing Association
                </p>
                <div className='flex items-center gap-8 flex-wrap'>
                    <img src={logo1} alt='' className='w-10'/>
                    <img src={logo2} alt='' className='w-10'/>
                    <img src={logo3} alt='' className='w-10'/>
                    <img src={logo4} alt='' className='w-10'/>
                    <img src={logo5} alt='' className='w-10'/>
                    <img src={logo6} alt='' className='w-10'/>

                    <div className='flex- item-center gap-8'>
                    <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Products
