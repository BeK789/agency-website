import React from 'react'
import about from '../assets/about.png'
import icon1 from '../assets/icons2/icon1.png'
import icon2 from '../assets/icons2/icon2.png'
import icon3 from '../assets/icons2/icon3.png'
import icon4 from '../assets/icons2/icon4.png'

const About = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={about} alt=''/>
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
            The unseen of spending three years at Pixelgrade
            </h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sint natus iure consequuntur ab explicabo sunt cumque. Quisquam iste rem quod facilis officiis! Vitae delectus sequi corporis excepturi quasi officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore, impedit fugit molestiae dolorem facere nihil at minus, accusamus optio praesentium! A alias at sapiente provident id, odio magni consequuntur.
            </p>
            <button className='btn-primary'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
           Helping a local <span className='text-brandPrimary'>business reinvent itself</span>
            </h2>
            <p>
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'> 
              <div className=' flex items-center gap-4'>
                <img src={icon1} alt=''/>
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>
                    2,245
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className=' flex items-center gap-4'>
                <img src={icon2} alt=''/>
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>
                    2,245
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className='space-y-8'> 
              <div className=' flex items-center gap-4'>
                <img src={icon3} alt=''/>
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>
                    2,245
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className=' flex items-center gap-4'>
                <img src={icon4} alt=''/>
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>
                    2,245
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
