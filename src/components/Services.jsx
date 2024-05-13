import React from 'react'
import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'
import logo6 from '../assets/logos/logo6.png'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'

const Services = () => {

  const services = [
  {id:1, title: "Membership Organisation", description: "Our membership management software provides full automation of membership renewals and payments", image: icon1},
  {id:1, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: icon2},
  {id:1, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: icon3}
  ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='services'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <img src={logo1} alt='' className='w-10 inline-block items-center'/>
          <img src={logo2} alt='' className='w-10 inline-block items-center'/>
          <img src={logo3} alt='' className='w-10 inline-block items-center'/>
          <img src={logo4} alt='' className='w-10 inline-block items-center'/>
          <img src={logo5} alt='' className='w-10 inline-block items-center'/>
          <img src={logo6} alt='' className='w-10 inline-block items-center'/>
        </div>

        <div className='mt-20 md:w-1/2 mx-auto text-center'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community
          in a single system</h2>
          <p className='text-neutralGrey'>Who is CB Srvices suitable for?</p>
        </div>
      </div>

      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow
          cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 justify-center items-center
          h-full'>
            <div>
              <div className='bg-[#E8F5E9] mb-4 h-14 w-14 px-2 mx-auto relative rounded-tl-3xl rounded-br-3xl'>
                <img src={service.image} alt='' className='-ml-5' />
              </div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralGrey '>{service.description}</p>
            </div>
          </div>)
        }
      </div>  
    </div>
  )
}

export default Services;

